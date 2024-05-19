import { AccessControlProvider } from "@refinedev/core";

import { Enforcer, newEnforcer, newModel, StringAdapter } from "casbin";

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
p, admin, classes/*, (show)|(edit)|(delete)
p, admin, classes/*, field
p, admin, lessons, (list)|(create)
p, admin, lessons/*, (edit)

p, admin, events, (list)|(create)
p, admin, events/*, (edit)|(delete)|(show)

p, admin, people, (list)
p, admin, students, (list)|(create)
p, admin, students/*, (edit)|(delete)|(show)
p, admin, students/*, field

p, admin, teachers, (list)|(create)
p, admin, teachers/*, (show)|(delete)
p, admin, teachers/*, field

p, admin, lessons, (list)|(create)
p, admin, lessons/*, (show)

p, admin, administration, (list)
p, admin, settings, (list)
p, admin, audits, (list)


p, teacher, dashboard, (list)
p, teacher, dashboard/teacherUpcomingEvents, (show)

p, teacher, people, (list)
p, teacher, students, (list)|(create)
p, teacher, students/*, (edit)|(delete)|(show)
p, teacher, students/*, field

p, teacher, classes, (list)
p, teacher, classesTeacherLimited, (list)
p, teacher, classes/*, (edit)
p, teacher, classes/*, field

p, teacher, lessons, (list)|(create)
p, teacher, lessons/*, (show)
  
p, teacher, events, (list)|(create)
p, teacher, events/*, (edit)|(delete)|(show)

p, student, dashboard, (list)
p, student, dashboard/studentUpcomingEvents, (show)
p, student, events, (list)
p, student, events/*, (show)

p, student, classes, (list)
p, student, classesStudentLimited, (list)
p, student, classes/*, (show)
p, student, classes/*, field

`);

export const accessControlProvider: AccessControlProvider = {
  can: async ({ action, params, resource }) => {
    const enforcer = await newEnforcer(model, adapter);
    const highestRole = sessionStorage.getItem("highestRole") ?? "student";
    if (action === "delete" || action === "edit" || action === "show") {

      return Promise.resolve({
        can: await enforcer.enforce(
          highestRole,
          `${resource}/${params?.id}`,
          action
        ),
      });
    }
    if (action === "field") {
      return Promise.resolve({
        can: await enforcer.enforce(
          highestRole,
          `${resource}/${params?.field}`,
          action
        ),
      });
    }
    return {
      can: await enforcer.enforce(highestRole, resource, action),
    };
  },
};

let enforcer: Enforcer;

const getEnforcer = async () => {
  if (!enforcer) {
    enforcer = await newEnforcer(model, adapter);
  }
  return enforcer;
};

export const canAccess = async (
  role: string,
  resource: string,
  action: string
) => {
  const enforcer = await getEnforcer();
  return enforcer.enforce(role, resource, action);
};
