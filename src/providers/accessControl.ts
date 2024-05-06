import { AccessControlProvider } from "@refinedev/core";

import { newEnforcer, newModel, StringAdapter } from "casbin";

export const model = newModel(`
[request_definition]
r = sub, obj, act

[policy_definition]
p = sub, obj, act, eft

[role_definition]
g = _, _

[policy_effect]
e = some(where (p.eft == allow)) && !some(where (p.eft == deny))

[matchers]
m = g(r.sub, p.sub) && keyMatch(r.obj, p.obj) && regexMatch(r.act, p.act)
`);

export const adapter = new StringAdapter(`
p, admin, dashboard, (list)|(create)

p, admin, classes, (list)|(create)
p, admin, classes/*, (edit)|(delete)
p, admin, classes/*, field

p, admin, events, (list)|(create)
p, admin, events/*, (edit)|(delete)|(show)
p, admin, people, (list)
p, admin, students, (list)|(create)
p, admin, students/*, (edit)|(delete)|(show)
p, admin, students/*, field
p, admin, teachers, (list)|(create)
p, admin, teachers/*, (edit)|(delete)
p, admin, teachers/*, field


`);

export const accessControlProvider: AccessControlProvider = {
  can: async ({ action, params, resource }) => {
    console.log("Checking access control", { action, params, resource });
    const enforcer = await newEnforcer(model, adapter);
    if (action === "delete" || action === "edit" || action === "show") {
      console.log(resource);

      return Promise.resolve({
        can: await enforcer.enforce(
          "admin",
          `${resource}/${params?.id}`,
          action
        ),
      });
    }
    if (action === "field") {
      return Promise.resolve({
        can: await enforcer.enforce(
          "admin",
          `${resource}/${params?.field}`,
          action
        ),
      });
    }
    return {
      can: await enforcer.enforce("admin", resource, action),
    };
  },
};
