/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  serverBuildTarget: "vercel",
  server: process.env.NODE_ENV === "development" ? undefined : "./server.mjs",
  ignoredRouteFiles: ["**/.*"],
  publicPath: "/build/",
  assetsBuildDirectory: "public/build",
  serverBuildPath: "build/index.js"
};
