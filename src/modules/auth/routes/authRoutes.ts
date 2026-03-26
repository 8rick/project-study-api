import { FastifyInstance } from "fastify";
import { registerController } from "../controllers/registerController";
import { loginController } from "../controllers/loginContoller";

export async function authRoutes(app: FastifyInstance) {

  app.post("/auth/register", registerController);

  app.post("/auth/login", loginController);

}