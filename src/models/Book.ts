import mongoose from "mongoose";

const BookSchema = new mongoose.Schema(
  {
    title: String,
    author: String,
    category: String,
    coverImage: String,
    available: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.models.Book ||
  mongoose.model("Book", BookSchema);
