import path from "path";
import fs from "fs";

// This function helps detect the current environment/mode
function getEnvironmentMode() {
  const nodeEnv = process.env.NODE_ENV;
  return {
    isDev: nodeEnv === "development",
    isTest: nodeEnv === "test",
    isProd: nodeEnv === "production",
  };
}

// IMPORTANT: This function finds the path to open-props package
function getPackageIncludePaths(packageName) {
  const projectRoot = process.cwd();
  const nodeModulePaths = [path.join(projectRoot, "node_modules")];

  let packagePath = null;

  for (const nodeModulePath of nodeModulePaths) {
    const packageJsonPath = path.resolve(
      nodeModulePath,
      packageName,
      "package.json",
    );
    if (fs.existsSync(packageJsonPath)) {
      packagePath = path.dirname(packageJsonPath);
      break;
    }
  }

  if (!packagePath) {
    console.warn(`Could not find package ${packageName}`);
    return [];
  }

  return [
    path.join(packagePath, "**/*.{js,jsx,ts,tsx}"),
    "!" + path.join(packagePath, "node_modules/**/*.{js,jsx,ts,tsx}"),
  ];
}

// Get the paths to open-props or node_modules packages you need to compile
// const openPropsIncludePaths = getPackageIncludePaths(
//   "@open-props",
// );

export default {
  plugins: {
    "@stylexjs/postcss-plugin": {
      include: [
        "./src/**/*.{js,jsx,ts,tsx}",
        // ...openPropsIncludePaths,
      ],
      useCSSLayers: true,
      fileName: "stylex.css",
      outputCSS: true,
      babelConfig: {
        babelrc: false,
        parserOpts: {
          plugins: ["typescript", "jsx"],
        },
        plugins: [
          [
            "@stylexjs/babel-plugin",
            {
              dev: getEnvironmentMode().isDev,
              test: getEnvironmentMode().isTest,
              runtimeInjection: getEnvironmentMode().isDev,
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
    },
    autoprefixer: {},
  },
};