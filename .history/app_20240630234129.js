// const express = require("express");
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello sire!");
});

app.get("/posts", (req, res) => {
  res.send("hello world!");
});

const PORT = 8080;

app.listen(PORT, () => console.log(`listening on - http://localhost:${PORT}`));
