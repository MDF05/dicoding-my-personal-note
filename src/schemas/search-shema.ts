import zod from "zod";

export const searchSchema = zod.object({
  query: zod.string(),
});

export type SearchSchema = zod.infer<typeof searchSchema>;
