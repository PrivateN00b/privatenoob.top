import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import vike from 'vike/plugin';
import { cjsInterop } from "vite-plugin-cjs-interop"

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
            [
              "babel-plugin-styled-components",
              {
                fileName: false,
              }
            ],
          ],
        },
      }),
      vike(),
      cjsInterop({
      // Add broken npm package here
      dependencies: [
        // Apply patch to root import:
        //   import someImport from 'some-package'
        "react-router-dom",
        // "styled-components",
 
        // Apply patch to all sub imports:
        //   import someImport from 'some-package/path'
        //   import someImport from 'some-package/sub/path'
        //   ...
        "react-router-dom/**",
        // "styled-components/**"
      ]
    })
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
    // ssr: {
    // // Add problematic npm package here:
    // noExternal: ['styled-components']
    // }
  };
});