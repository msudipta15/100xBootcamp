import express, { type NextFunction, type Request, type Response } from "express";
import "dotenv/config";
export interface extendedRequest extends Request {
    id?: string;
    role?: string;
}
export declare function auth(req: extendedRequest, res: Response, next: NextFunction): Promise<express.Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=authmiddleware.d.ts.map