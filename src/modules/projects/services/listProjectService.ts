import { prisma } from "../../../database/prisma";

export async function listProjectService(userId: string) {
    
    const projects = await prisma.project.findMany({
        where: { 
            organization: {
                ownerId: userId
            }
         }
    });

    return projects;
}