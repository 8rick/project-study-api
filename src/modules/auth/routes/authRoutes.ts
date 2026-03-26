import { FastifyInstance } from "fastify";
import { registerController } from "../controllers/registerController";

export async function authRoutes(app: FastifyInstance) {
    app.post("/auth/register", registerController);
}