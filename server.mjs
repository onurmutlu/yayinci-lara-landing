import { createRequestHandler } from "@vercel/remix";

// Minimal build nesnesi
const build = {
  entry: { module: { default: () => null } },
  routes: {
    "routes/api": {
      id: "routes/api",
      path: "api",
      module: {
        action: async ({ request }) => {
          const body = await request.json();
          // Telegram bot işlemleri burada yapılır
          return new Response(JSON.stringify({ success: true }), {
            headers: { "Content-Type": "application/json" }
          });
        }
      }
    }
  }
};

export default createRequestHandler({
  build,
  mode: process.env.NODE_ENV,
  getLoadContext() {
    return {};
  }
});