import { FastifyInstance } from "fastify";
import { authMiddleware } from "../../../middlewares/authMiddleware";
import { listProjectsController } from "../controllers/listProjectsContoller";

export async function projectsRoutes(app: FastifyInstance) {

  app.get(
    "/projects",
    { preHandler: authMiddleware },
    listProjectsController
  );
  
}