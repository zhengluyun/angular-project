import mongoose from "mongoose";

const todolistSchema = mongoose.Schema({
  title: { type: String, required: true },
  isOverdue: { type: Boolean, required: true },
  isTask: {type: Boolean, required: true },
  counter: {type: Number, required: true}
});

export default mongoose.model("Todolist", todolistSchema);