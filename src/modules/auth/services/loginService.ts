import { prisma } from "../../../database/prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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


  return user;
}