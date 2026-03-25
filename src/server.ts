import fastifyCors from "@fastify/cors";
import Fastify from "fastify";

const app = Fastify();

app.register(fastifyCors);

app.get("/", async () => {
    return {message: "Api funcionando"}
})

app.listen({ port: 3333}).then(() => {
    return("Server running on http://locallhost:3333")
})