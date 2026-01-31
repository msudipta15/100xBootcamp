import mongoose, { Schema, set } from "mongoose";

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  role: { enum: ["owner", "customer"], required: true },
  phone: { type: Number },
  created_at: { type: Date, default: Date.now },
});

const hotelSchema = new Schema({
  name: { type: String, required: true },
  owner_id: { type: mongoose.Types.ObjectId, ref: "users" },
  description: { type: String, required: true },
  city: { type: String, required: true },
  amenities: { type: [], default: [] },
  rating: {
    type: Number,
    default: 0.0,
    min: 1,
    max: 5,
    set: (v: number) => Math.round(v * 10) / 10,
  },
  total_reviews: { type: Number, default: 0 },
  created_at: { type: Date, default: Date.now },
});

const roomSchema = new Schema({
  hotel_id: { type: mongoose.Types.ObjectId, ref: "hotels" },
  room_number: { type: String, required: true },
  room_type: { type: String, required: true },
  max_occupancy: { type: Number, required: true },
  price_per_night: { type: Number, required: true },
  created_at: { type: Date, default: Date.now },
});

// This is done to make the hotel_id and room_number unique
// No hotel can have 2 rooms with same room numbers
roomSchema.index(
  {
    hotel_id: 1,
    room_number: 1,
  },
  { unique: true },
);
