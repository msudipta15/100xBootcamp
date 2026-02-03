import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { string, z } from "zod";
import { hotelModel, userModel } from "./db/db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { auth } from "./middlewares/authmiddleware.js";
dotenv.config();
const app = express();
const port = process.env.port || 3000;
const jwt_key = process.env.jwt_key || "uiwiu&^^%^^&";
app.use(express.json());
async function main() {
    try {
        console.log("Connecting to db....");
        if (process.env.db_url) {
            await mongoose.connect(process.env.db_url);
            console.log("Connected");
            app.listen(port);
            console.log(`Listening to port ${port}`);
        }
        else {
            console.log("Invalid db url !");
        }
    }
    catch (error) {
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
        password: z
            .string()
            .min(4, "Password needs to be minimum 4 characters long !")
            .max(25, "Password is too long , it should be less than 25 characters"),
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
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            data: null,
            error: "Something went wrong !",
        });
    }
});
app.post("/api/auth/login", async function (req, res) {
    const email = req.body.email;
    const password = req.body.password;
    const loginBody = z.object({
        email: z.email("Not a valid email !"),
        password: z
            .string()
            .min(4, "Password needs to be minimum 4 characters long !")
            .max(25, "Password is too long , it should be less than 25 characters"),
    });
    const validinput = loginBody.safeParse({ email, password });
    if (!validinput.success) {
        return res.status(400).json({
            success: false,
            data: null,
            error: "INVALID_REQUEST",
        });
    }
    try {
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(400).json({
                success: false,
                data: null,
                error: "INVALID_CREDENTIALS",
            });
        }
        const valid_password = await bcrypt.compare(password, user?.password);
        if (!valid_password) {
            return res.status(400).json({
                success: false,
                data: null,
                error: "INVALID_CREDENTIALS",
            });
        }
        const token = jwt.sign({ id: user._id.toString(), role: user.role }, jwt_key);
        res.status(200).json({
            success: true,
            data: {
                token: token,
                user: {
                    id: user._id,
                    name: user.name,
                    email: user.email,
                    role: user.role,
                },
            },
            error: null,
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            data: null,
            error: "Something went wrong !",
        });
    }
});
app.post("api/hotels", auth, async function (req, res) {
    const name = req.body.name;
    const description = req.body.description;
    const city = req.body.city;
    const country = req.body.country;
    const amenities = req.body.amenities;
    const id = req.id;
    const inputBody = z.object({
        name: z.string().min(1).max(100),
        description: z.string().max(1000),
        city: z.string().max(50),
        country: z.string().max(50),
        amenities: z.array(z.string()),
    });
    const valid_input = inputBody.safeParse({
        name,
        description,
        city,
        country,
        amenities,
    });
    if (!valid_input.success) {
        return res.status(400).json({
            success: false,
            data: null,
            error: "INVALID_REQUEST",
        });
    }
    const owner_id = new mongoose.Types.ObjectId(id);
    const createHotel = await hotelModel.create({
        owner_id,
        name,
        description,
        city,
        amenities,
    });
});
//# sourceMappingURL=app.js.map