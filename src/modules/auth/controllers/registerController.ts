import { FastifyRequest, FastifyReply } from "fastify";
import { registerSchema } from "../schemas/registerSchema";
import { registerService } from "../services/registerService";

export async function registerController(
    request: FastifyRequest,
    reply: FastifyReply,
) {
    const data = registerSchema.parse(request.body);

    const user = await registerService(data);

    return reply.status(202).send(user);
}
