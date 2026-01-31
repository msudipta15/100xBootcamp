import express, { Router } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const owner_router = Router();

owner_router.post("/");
