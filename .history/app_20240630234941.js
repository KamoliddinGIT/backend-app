const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello sire!");
});

app.get("/post", (req, res) => {
  res.send("hello world!");
});

const PORT = 5000;

app.listen(PORT, () => console.log(`listening on - http://localhost:${PORT}`));
