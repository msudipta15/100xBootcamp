import express, {
  type NextFunction,
  type Request,
  type Response,
} from "express";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { json } from "zod";

export async function auth(req: Request, res: Response, next: NextFunction) {
  const token = req.headers.token;

  if (!token) {
    return res.status(401).json({
      success: false,
      data: null,
      error: "UNAUTHORIZED",
    });
  }

  const verify = jwt.verify(token.toString(), process.env.jwt_key!);
}
