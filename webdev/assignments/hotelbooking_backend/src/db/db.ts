import mongoose, { Schema, set } from "mongoose";

const userSchema = new Schema({
  name: { type: String, require: true },
  email: { type: String, unique: true, require: true },
  password: { type: String, require: true },
  role: { enum: ["owner", "customer"], require: true },
  phone: { type: Number },
  created_at: { type: Date, default: Date.now() },
});

const hotelSchema = new Schema({
  name: { type: String, require: true },
  owner_id: { type: mongoose.Types.ObjectId, ref: "user" },
  description: { type: String, require: true },
  city: { type: String, require: true },
  amenities: { type: [], default: [] },
  rating: {
    type: Number,
    default: 0.0,
    min: 1,
    max: 5,
    set: (v: number) => Math.round(v * 10) / 10,
  },
  total_reviews: { type: Number, default: 0 },
  created_at: { type: Date, default: Date.now() },
});
