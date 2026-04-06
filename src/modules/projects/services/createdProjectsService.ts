import { prisma } from "../../../database/prisma";

export async function createProjectService(data, userId) {

  const organization = await prisma.organization.findFirst({
    where: {
      ownerId: userId
    }
  });

  if (!organization) {
    throw new Error("Organização não encontrada");
  }

  const project = await prisma.project.create({
    data: {
      name: data.name,
      description: data.description,
      price: data.price,
      status: "pending",
      isPaid: false,

      organization: {
        connect: {
          id: organization.id
        }
      },

      client: {
        connect: {
          id: data.clientId
        }
      }
    }
  });

  return project;
}