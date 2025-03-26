const { createRequestHandler } = require("@remix-run/express");
const express = require("express");

const app = express();
app.use(express.static("public"));

app.all("*", createRequestHandler({}));

app.listen(3000, () => {
  console.log("✅ Yayinci-Lara Express sunucusu çalışıyor: http://localhost:3000");
});
