import fastifyCors from "@fastify/cors";
import Fastify from "fastify";
import { authRoutes } from "./modules/auth/routes/authRoutes";

const app = Fastify();

app.register(authRoutes);

app.get("/", async () => {
  return { message: "API funcionando 🚀" }
})


app.listen({ port: 3333}).then(() => {
    return("Server running on port http://locallhost:3333")
})