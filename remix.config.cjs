/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  serverBuildTarget: "vercel",
  server: process.env.NODE_ENV === "development" ? undefined : "./server.mjs",
  ignoredRouteFiles: ["**/.*"],
  publicPath: "/build/",
  assetsBuildDirectory: "public/build",
  serverBuildPath: "build/index.js",
  serverModuleFormat: "esm",
  future: {
    v2_dev: true,
    v2_errorBoundary: true,
    v2_meta: true,
    v2_normalizeFormMethod: true,
    v2_routeConvention: true
  }
};