const express = require("express");
const mongoose = require("mongoose");
const postModel = require("./models/post.model");
const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
  try {
    const allPosts = await postModel.find();
    res.status(200).json(allPosts);
  } catch (error) {
    res.status(500).json(error);
  }
});

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

const 

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
