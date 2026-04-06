import { prisma } from "../../../database/prisma";


export async function createClientService(data, userId) {

    const organization = await prisma.organization.findFirst({
        where: {
            ownerId: userId
        }
    });

    if(!organization) {
        throw new Error("Organização não encontrada");
    }

    const client = await prisma.client.create({
        data: {
            name: data.name,
            email: data.email,
            phone: data.phone,  
            organizationId: organization.id
        }
    });
    return client;
}