import { FastifyRequest, FastifyReply } from "fastify";
import { loginSchema } from "../schemas/loginSchema";
import { loginService } from "../services/loginService";


export async function loginController(request, reply) {
  const result = await loginService(request.body);

  return reply.send(
    result,
    );
}