import type { IGraphQLConfig } from "graphql-config";

const config: IGraphQLConfig = {
  // schema: "https://api.crm.refine.dev/graphql",

  schema: "https://graphql.sms.thanhtung.tech/graphql",
  extensions: {
    codegen: {
      hooks: {
        afterOneFileWrite: ["eslint --fix", "prettier --write"],
      },
      generates: {
        "src/graphql/new/schema.types.ts": {
          plugins: ["typescript"],
          config: {
            skipTypename: true,
            enumsAsTypes: true,
          },
        },
        "src/graphql/new/temp.ts": {
          preset: "import-types",

          documents: ["src/**/createLesson.{ts,tsx}"],

          plugins: ["typescript-operations"],
          config: {
            skipTypename: true,
            enumsAsTypes: true,
            preResolveTypes: false,
            useTypeImports: true,
            avoidOptionals: true,
            maybeValue: "T | undefined",
          },

          presetConfig: {
            typesPath: "./schema.types",
          },
        },
      },
    },
  },
};

export default config;
