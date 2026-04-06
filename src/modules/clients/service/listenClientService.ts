import { th } from "zod/locales";
import { prisma } from "../../../database/prisma";


export async function listenClientService(userId){

    const organization = await prisma.organization.findFirst({
        where: {
            ownerId: userId
        }
    });

    if(!organization) {
        throw new Error("Organização não encontrada");
    }

    const clients = await prisma.client.findMany({
        where: {
            organizationId: organization.id        
        }
    });
    return clients;
}