import { prisma } from "../../../database/prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { id } from "zod/locales";

interface LoginRequest {
  email: string;
  password: string;
}

export async function loginService(data: LoginRequest) {

  const user = await prisma.user.findUnique({
    where: { email: data.email }
  });

  if (!user) {
    throw new Error("Invalid credentials");
  }

  const passwordMatch = await bcrypt.compare(
    data.password,
    user.password
  );


  if (!passwordMatch) {
    throw new Error("Invalid credentials");
  }

  const token = jwt.sign(
    {
      userId: user.id
    }, 
    process.env.JWT_SECRET || "supersecret",

    {
      expiresIn: "7d"
    }
  );

  return {
  user:{
    id: user.id,
    name: user.name,
    email: user.email,
  },
  token
  };
}