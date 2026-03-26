import { FastifyRequest, FastifyReply } from "fastify";
import jwt from "jsonwebtoken";


export async function authMiddlewares(
    request: FastifyRequest,
    reply: FastifyReply,
) {
    const authHeader = request.headers.authorization;

    if(!authHeader) {
        return reply.status(401).send({
            message: "Token not provided"
        });
       }   

    const token = authHeader.split(" ")[1];

    try{
        const decoded = jwt.verify(token, "superseccret");

        request.url = decoded;

    } catch{
        return reply.status(401).send({
            message: "Invalid token"
        })
    }
  
}