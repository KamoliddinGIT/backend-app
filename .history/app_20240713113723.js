const express = require("express");
const mongoose = req
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

app.put("/:id", (req, res) => {
  const { id } = req.params;
  const person = req.body;

  res.json({ id, person });
});

const DB_URL =
  "mongodb+srv://kamoliddinbakhtiyorov:sire121007@cluster0.vhlezxx.mongodb.net/";

const PORT = 5000;

app.listen(PORT, () => console.log(`listening on - http://localhost:${PORT}`));
