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
  const message = req.body;
  res.send(message);
});

app.delete("/:id", (req, res) => {
  const { id } = req.params;
  res.send(id);
});
const PORT = 5000;

app.listen(PORT, () => console.log(`listening on - http://localhost:${PORT}`));
