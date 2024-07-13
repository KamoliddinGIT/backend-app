const { Schema, model } = require("mongoose");

const postSchema = new Schema({
  title: { type: String, required: true },
  body: { type: String, required: false },
});

module.exports = model("postSchema", postSchema);
