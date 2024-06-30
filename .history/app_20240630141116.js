const express = require("express");

const app = express();

console.log("hello sire");
const PORT = 8080;

app.listen(PORT, () => console.log(`listening on - https://localhost:${PORT}`));
