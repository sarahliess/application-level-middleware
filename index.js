const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const secureApp = require("./middlewares/auth");

app.use(secureApp);

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
