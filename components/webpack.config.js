const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "ambevtech",
    projectName: "components",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    externals: ["styled-components"],
  });
};
