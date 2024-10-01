const mongoose = require("mongoose")

// Create Schema
const todoSchema = mongoose.Schema(
  { title: { type: String, required: true }, desc: String },
// , unique:true, maxlength: 20, minlength: 3, trim:true
  { timestamps: true }
);

const Todo = mongoose.model("todo", todoSchema)

module.exports = Todo