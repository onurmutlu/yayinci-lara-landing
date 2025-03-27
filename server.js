const { createRequestHandler } = require("@remix-run/express");
const express = require("express");
const path = require("path");

const app = express();
app.use(express.static("public"));

app.all(
  "*",
  createRequestHandler({
    getLoadContext() {
      return {};
    },
  })
);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
