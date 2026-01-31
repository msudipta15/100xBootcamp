import express, { Router } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const app = express();
app.use(Router());
async function main() {
    try {
        console.log("Connecting to db....");
        if (process.env.db_url) {
            await mongoose.connect(process.env.db_url);
            console.log("Connected");
        }
        else {
            console.log("Invalid db url !");
        }
    }
    catch (error) {
        console.log("Something went wrong in db connection !");
    }
}
main();
//# sourceMappingURL=app.js.map