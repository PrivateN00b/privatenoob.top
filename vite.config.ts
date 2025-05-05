import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig(({ mode }) => {
  return {
    plugins: [
      react({
        babel: {
          plugins: [
            [
              "@stylexjs/babel-plugin",
              {
                dev: mode === "development",
                test: mode === "test",
                runtimeInjection: mode === "development",
                genConditionalClasses: true,
                treeshakeCompensation: true,
                unstable_moduleResolution: {
                  type: "commonJS",
                  rootDir: path.resolve(),
                },
              },
            ],
          ],
        },
      }),
    ],
    css: {
      postcss: path.resolve(path.resolve(), "postcss.config.js"),
    },
    // optimizeDeps: {
    //   exclude: ["@open-props"],
    // },
    build: {
      sourcemap: true,
      target: "esnext",
    },
    server: {
      port: 3000,
    },
    publicDir: "public",
  };
});