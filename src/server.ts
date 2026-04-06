import fastifyCors from "@fastify/cors";
import Fastify from "fastify";
import { authRoutes } from "./modules/auth/routes/authRoutes";
import { projectsRoutes } from "./modules/projects/routes/projectsRoutes";
import fastifyJwt from "@fastify/jwt";
import { authMiddleware } from "./middlewares/authMiddleware";

const app = Fastify();

app.register(authRoutes);
app.register(projectsRoutes);   


app.listen({ port: 3333}).then(() => {
    return("Server running ")
})

app.register(fastifyJwt, {
    secret: process.env.JWT_SECRET || "supersecret"
});

app.get("/me", { preHandler: authMiddleware }, async (request, reply) => {
  return {
    message: "Usuário autenticado"
  };
});