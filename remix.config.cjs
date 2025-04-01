/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  serverBuildTarget: "vercel",
  server: process.env.NODE_ENV === "development" ? undefined : "./server.mjs",
  ignoredRouteFiles: ["**/.*"],
  publicPath: "/build/",
  assetsBuildDirectory: "public/build",
  serverBuildPath: "build/index.js",
  tailwind: true,
  future: {
    v3_fetcherPersist: true,
    v3_lazyRouteDiscovery: true,
    v3_relativeSplatPath: true,
    v3_singleFetch: true,
    v3_throwAbortReason: true
  }
};
