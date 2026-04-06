import { listenClientService } from "../service/listenClientService";


export async function listenClientController(request, reply) {
    const userId = request.user.userId;

    const clients = await listenClientService(userId);

    return reply.send(clients);
}
