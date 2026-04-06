import { z } from "zod";

export const createProjectSchema = z.object({
  name: z.string().min(3),
  description: z.string().optional(),
  price: z.number().positive(),
  clientId: z.string()
});