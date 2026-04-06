import { FastifyInstance } from "fastify";
import { authMiddleware } from "../../../middlewares/authMiddleware";
import { listProjectsController } from "../controllers/listProjectsContoller";
import { createProjectController } from "../controllers/createdProjectsContoller";

export async function projectsRoutes(app: FastifyInstance) {

  app.get(
    "/",
    { preHandler: authMiddleware },
    listProjectsController
  );

  app.post(
    "/",
    { preHandler: authMiddleware },
    createProjectController
  );
  
}