const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("hello sire!");
});

app.get("/post", (req, res) => {
  res.send("hello World!");
});
const PORT = 8080;

app.listen(PORT, () => console.log(`listening at - http://localhost:${PORT}`));
