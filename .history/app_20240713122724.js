const express = require("express");
const mongoose = require("mongoose");
const postModel = require("./models/post.model");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {});

app.post("/", async (req, res) => {
  try {
    const { title, body } = req.body;
    const newPost = await postModel.create({ title, body });
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json(error);
  }
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
