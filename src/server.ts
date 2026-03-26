import fastifyCors from "@fastify/cors";
import Fastify from "fastify";
import { authRoutes } from "./modules/auth/routes/authRoutes";

const app = Fastify();

app.register(authRoutes);


app.listen({ port: 3333}).then(() => {
    return("Server running ")
})