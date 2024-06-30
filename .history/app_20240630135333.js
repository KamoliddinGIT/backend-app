const express = require("express");

const app = express();

const PORT = 8080;

app.listen(PORT, () => console.log(`localhost on - https://localhost:${PORT}`));
