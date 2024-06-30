const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("hello sire!");
});
const PORT = 8080;

app.listen(PORT, () => console.log(`listening on - http://localhost:${PORT}`));
