import fastifyCors from "@fastify/cors";
import Fastify from "fastify";
import { authRoutes } from "./modules/auth/routes/authRoutes";
import { projectsRoutes } from "./modules/projects/routes/projectsRoutes";
import fastifyJwt from "@fastify/jwt";
import { authMiddleware } from "./middlewares/authMiddleware";
import { clientRoutes } from "./modules/clients/routes/clientsRoutes";


const app = Fastify();

app.register(fastifyJwt, {
  secret: process.env.JWT_SECRET || "supersecret"
});

app.register(authRoutes);
app.register(projectsRoutes, { prefix: "/projects" });

app.register(clientRoutes, { prefix: "/clients" });

app.get("/me", { preHandler: authMiddleware }, async () => {
  return { message: "Usuário autenticado" };
});

app.listen({ port: 3333 });