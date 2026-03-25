import { email, z } from "zod";

export const registerSchema = z.object({
    name: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(6),
    organization: z.string().min(2)
})

export type registerSchema = z.infer<typeof registerSchema>;