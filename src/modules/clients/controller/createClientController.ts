import { createClientSchema } from "../schemas/createClientSchema";
import { createClientService } from "../service/createClientService";


export async function creatClientController(request, reply) {

    console.log("USER:", request.user);
    
    const userId = request.user.userId;

    const data = createClientSchema.parse(request.body);

    const client = await createClientService(data, userId);

    return reply.status(201).send(client);
}