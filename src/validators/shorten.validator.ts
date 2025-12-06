import { z } from "zod";

export const createShortenSchema = {
    body: z.object({
        url: z.string().url(),
    }),
};
