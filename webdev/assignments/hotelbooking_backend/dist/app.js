import express, { Router } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const port = process.env.port || 3000;
app.use(Router());
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
//# sourceMappingURL=app.js.map