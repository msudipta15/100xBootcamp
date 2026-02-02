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

const bookingSchema = new Schema({
  user_id: { type: mongoose.Types.ObjectId, required: true, ref: "users" },
  room_id: { type: mongoose.Types.ObjectId, required: true, ref: "rooms" },
  hotel_id: { type: mongoose.Types.ObjectId, required: true, ref: "hotels" },
  check_in_date: { type: Date, required: true },
  check_out_date: { type: Date, required: true },
  guests: { type: Number, required: true },
  totalprice: {
    type: Number,
    set: (v: number) => Math.floor(v * 10) / 10,
    required: true,
  },
  status: { enum: ["confirmed", "cancelled"], default: "confirmed" },
  booking_date: { type: Date, default: Date.now },
  cancelled_at: { type: Date },
});

const reviewSchema = new Schema({
  user_id: { type: mongoose.Types.ObjectId, required: true, ref: "users" },
  hotel_id: { type: mongoose.Types.ObjectId, required: true, ref: "hotels" },
  booking_id: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "bookings",
  },
  rating: { type: Number, min: 1, max: 5, required: true },
  comment: { type: String },
  created_at: { type: Date, default: Date.now },
});

reviewSchema.index(
  {
    user_id: 1,
    booking_id: 1,
  },
  { unique: true },
);

export const userModel = mongoose.model("users", userSchema);
export const hotelModel = mongoose.model("hotels", hotelSchema);
export const roomModel = mongoose.model("rooms", roomSchema);
export const bookingModel = mongoose.model("bookings", bookingSchema);
export const reviewModel = mongoose.model("reviews", reviewSchema);
