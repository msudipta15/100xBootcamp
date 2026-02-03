import express, { type NextFunction, type Request, type Response } from "express";
import "dotenv/config";
export declare function auth(req: Request, res: Response, next: NextFunction): Promise<express.Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=authmiddleware.d.ts.map