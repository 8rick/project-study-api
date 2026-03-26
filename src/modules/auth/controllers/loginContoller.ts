import { FastifyRequest, FastifyReply } from "fastify";
import { loginSchema } from "../schemas/loginSchema";
import { loginService } from "../services/loginService";

export async function loginController(
    request: FastifyRequest,
    reply: FastifyReply,
) {
    const data = loginSchema.parse(request.body);

    const result = await loginService(data);
    
    return reply.send(result)
}