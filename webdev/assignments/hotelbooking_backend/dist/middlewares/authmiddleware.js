import express, {} from "express";
import jwt, {} from "jsonwebtoken";
import "dotenv/config";
export async function auth(req, res, next) {
    try {
        const token = req.headers.token;
        if (!token) {
            return res.status(401).json({
                success: false,
                data: null,
                error: "UNAUTHORIZED",
            });
        }
        const decoded = jwt.verify(token.toString(), process.env.jwt_key);
        if (!decoded.id || !decoded.role) {
            return res.status(401).json({
                success: false,
                data: null,
                error: "UNAUTHORIZED",
            });
        }
        if (decoded.role !== "owner") {
            return res.status(403).json({
                success: false,
                data: null,
                error: "FORBIDDEN",
            });
        }
        req.id = decoded.id;
        req.role = decoded.role;
        next();
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            data: null,
            error: "SOMETHING WENT WRONG !",
        });
    }
}
//# sourceMappingURL=authmiddleware.js.map