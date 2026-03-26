import fastifyCors from "@fastify/cors";
import Fastify from "fastify";
import { authRoutes } from "./modules/auth/routes/authRoutes";
import { projectsRoutes } from "./modules/projects/routes/projectsRoutes";

const app = Fastify();

app.register(authRoutes);
app.register(projectsRoutes);   


app.listen({ port: 3333}).then(() => {
    return("Server running ")
})