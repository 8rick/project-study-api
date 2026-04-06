import { listProjectService } from "../services/listProjectService";

export async function listProjectsController(request, reply) {

  const userId = request.user.userId;

  const projects = await listProjectService(userId);

  return reply.send(projects);
}