import { ConfigEnv, defineConfig } from "vitest/config";

export default ({ mode }: ConfigEnv) => {
  return defineConfig({
    base: mode === "development" ? "" : "/copilot-codegpt/",
    build: {
      outDir: "docs",
    },
    test: {
      include: ["**/*.spec.ts"],
    },
  });
};
