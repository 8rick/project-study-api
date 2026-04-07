import jwt from "jsonwebtoken";

export async function authMiddleware(request, reply) {
  try {
    const authHeader = request.headers.authorization;

    console.log("HEADERS:", request.headers); 

    if (!authHeader) {
      throw new Error("Token missing");
    }

    const parts = authHeader.split(" ");

    if (parts.length !== 2) {
      throw new Error("Token error");
    }

    const [scheme, token] = parts;

    if (!/^Bearer$/i.test(scheme)) {
      throw new Error("Token malformatted");
    }

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET || "supersecret"
    );

    console.log("DECODED:", decoded); // 🔥 DEBUG

    request.user = decoded;

  } catch (err) {
    return reply.status(401).send({
      error: "Unauthorized"
    });
  }
}