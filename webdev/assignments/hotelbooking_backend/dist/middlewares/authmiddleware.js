import express, {} from "express";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { json } from "zod";
export async function auth(req, res, next) {
    const token = req.headers.token;
    if (!token) {
        return res.status(401).json({
            success: false,
            data: null,
            error: "UNAUTHORIZED",
        });
    }
    const verify = jwt.verify(token.toString(), process.env.jwt_key);
}
//# sourceMappingURL=authmiddleware.js.map