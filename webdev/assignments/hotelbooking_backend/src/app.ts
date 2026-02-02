import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { z } from "zod";
import { userModel } from "./db/db.js";
import bcrypt from "bcrypt";

dotenv.config();

const app = express();
const port = process.env.port || 3000;

app.use(express.json());

async function main() {
  try {
    console.log("Connecting to db....");
    if (process.env.db_url) {
      await mongoose.connect(process.env.db_url);
      console.log("Connected");
      app.listen(port);
      console.log(`Listening to port ${port}`);
    } else {
      console.log("Invalid db url !");
    }
  } catch (error) {
    console.log("DB connection error: ", error);
  }
}

main();

app.post("/api/auth/signup", async function (req, res) {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const phone = req.body.phone;
  const role = req.body.role;

  const authBody = z.object({
    name: z.string().min(1).max(50),
    email: z.email("Not a valid email !"),
    password: z.string().min(4),
    phone: z.string().max(50),
    role: z.enum(["owner", "customer"]),
  });

  const validinput = authBody.safeParse({ name, email, password, phone, role });

  if (!validinput.success) {
    console.log(validinput.error);
    res
      .status(400)
      .json({ success: false, data: null, error: "Invalid Request !" });
    return;
  }

  try {
    const existing_email = await userModel.findOne({ email });
    if (existing_email) {
      return res.status(400).json({
        success: false,
        data: null,
        error: "EMAIL_ALREADY_EXISTS",
      });
    }

    const hashed_password = await bcrypt.hash(password, 10);

    const user = await userModel.create({
      name,
      email,
      password: hashed_password,
      role,
      phone,
    });

    res.status(201).json({
      success: true,
      data: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        phone: user.phone,
      },
      error: null,
    });
  } catch (error) {}
});
