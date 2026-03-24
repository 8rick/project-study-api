import fastify from "fastify";
import fastifyCors from "@fastify/cors";

const app = fastify();

app.register(fastifyCors);

app.get("/", async () => {
    return {message: "Api funcionando"}
})

app.listen({port: 3333}).then(() => {
    return("Server running on http://locallhost:3333")
})