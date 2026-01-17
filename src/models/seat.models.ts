import mongoose from "mongoose";

const SeatSchema = new mongoose.Schema({
  seatNumber: Number,
  status: {
    type: String,
    enum: ["available", "booked"],
    default: "available",
  },
  userId: String,
  planEnd: Date,
});

export default mongoose.models.Seat ||
  mongoose.model("Seat", SeatSchema);
