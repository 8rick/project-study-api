import { prisma } from "../../../database/prisma";
import bcrypt from "bcrypt"

interface RegisterRequest {
    name: string;
    email: string;
    password: string;
    organization: string;
}

export async function registerService(data: RegisterRequest) {
    const userExists = await prisma.user.findUnique({
        where: { email: data.email }
    });

    if(userExists) {
   throw new Error("User already exists");
}

const passwordHash = await bcrypt.hash(data.password, 10);

const user = await prisma.user.create({
    data: {
        name: data.name,
        email: data.email,
        password: passwordHash,
        organization:{
            create: {
                name: data.organization
            }
        }
    }
});

  return user;
}


