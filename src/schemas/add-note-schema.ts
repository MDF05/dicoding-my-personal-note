import zod from "zod";

export const addNoteSchema = zod.object({
  titleNote: zod.string().min(5, "tittle notes must at be least 5 characters").max(49, "tittle notes max be at 50 characters"),
  bodyNote: zod.string().min(10, "notes must be at least 5 characters"),
});

export type AddNoteSchema = zod.infer<typeof addNoteSchema>;
