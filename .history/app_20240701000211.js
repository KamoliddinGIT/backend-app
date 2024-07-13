const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).json({
    message: "hello sire!",
    name: "Kamoliddin",
    surname: "bakhtiyorov",
  });
});

app.use(express.json());

app.post("/", (req, res) => {
  console.log(req.body);

  res.message(req.body);
});

const PORT = 5000;

app.listen(PORT, () => console.log(`listening on - http://localhost:${PORT}`));
