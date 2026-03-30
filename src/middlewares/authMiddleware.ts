import { FastifyRequest, FastifyReply } from "fastify";
import jwt from "jsonwebtoken";

export async function authMiddleware(
    request: FastifyRequest,
     reply: FastifyReply,
 ) {
  try {
    await request.jwtVerify();
  } catch (err) {
    return reply.status(401).send({
      error: "Unauthorized"
    });
  }
}