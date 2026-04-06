import { createProjectSchema } from "../schemas/createProjectSchema";
import { createProjectService } from "../services/createdProjectsService";

export async function createProjectController(request, reply) {

  const userId = request.user.userId;

  const data = createProjectSchema.parse(request.body);

  const project = await createProjectService(data, userId);

  return reply.status(201).send(project);

  console.log(request.user);

}



