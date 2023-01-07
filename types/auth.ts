import { Request as Req } from 'express';

/**
 * Extended Express Request interface to pass Payload Object to the request. Used by the auth middleware to pass data to the request by token signing (jwt.sign) and token verification (jwt.verify).
 * @param userId:string
 */
export type Request = Req & Payload;
export type Payload = { userId: string };
