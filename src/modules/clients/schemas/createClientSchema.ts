import { z } from "zod";


export const createClientSchema = z.object({
    name: z.string().min(3),
    email: z.string().email(),
    phone: z.string().optional()
});