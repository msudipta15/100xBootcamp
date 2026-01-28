const express = require("express");
const dotenv = require("dotenv");
const Router = require("express");

dotenv.config();

const app = express();

const owner_router = Router();

owner_router.post("/signup", async function (req, res) {});

module.exports = owner_router;
