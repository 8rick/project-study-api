import { FastifyInstance } from "fastify";
import { authMiddleware } from "../../../middlewares/authMiddleware";

export async function projectsRoutes(app: FastifyInstance) {

  app.get(
    "/projects",
    { preHandler: authMiddleware },
    async (request, reply) => {

      return {
        message: "Lista de projetos do usuário",
        user: request.user
      };

    }
  );

}