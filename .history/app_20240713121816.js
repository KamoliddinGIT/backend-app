const express = require("express");
const mongoose = require("mongoose");
const postModel = require("./models/post.model");
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
  const { title, body } = req.body;
  postModel.create()
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
  "mongodb+srv://bakhtiyorovkamoliddin:uMNUimHTbP6TgGic@backend.ptdvabs.mongodb.net/?retryWrites=true&w=majority&appName=backend";

const PORT = 5000;

const start_app = async () => {
  try {
    await mongoose.connect(DB_URL).then(() => console.log("connected DB"));
    app.listen(PORT, () =>
      console.log(`listening on - http://localhost:${PORT}`)
    );
  } catch (error) {
    console.log(`error with connecting DB: ${error}`);
  }
};

start_app();
