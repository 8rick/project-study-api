import { FastifyRequest, FastifyReply } from "fastify";
import { loginSchema } from "../schemas/loginSchema";
import { loginService } from "../services/loginService";


export async function loginController(request, reply) {
  const user = await loginService(request.body);

  const token = await reply.jwtSign({
    userId: user.id
  });

  return reply.send({
    user,
    token
  });
}