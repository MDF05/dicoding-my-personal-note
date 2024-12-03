import { Button, HStack, Input, Text, Textarea, VStack } from "@chakra-ui/react";
import { Field } from "@/components/ui/field";
import { useForm } from "react-hook-form";
import { AddNoteSchema, addNoteSchema } from "../../schemas/add-note-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppDispatch } from "./../../../stores/stores";
import { addNote } from "../../../stores/notes/slice-notes";
import { NoteTypes } from "@/types/note-types";

export default function FormAddNotes(): React.ReactNode {
  const {
    handleSubmit,
    register,
    watch,
    reset,
    formState: { errors },
  } = useForm<AddNoteSchema>({ resolver: zodResolver(addNoteSchema) });
  const titleNoteLength = (watch("titleNote") ?? "").length;
  const dispatch = useAppDispatch();

  function addNotes(event: AddNoteSchema) {
    const newNote: NoteTypes = { ...event, id: `${new Date().getMilliseconds()} ${Math.random()}`, createdAt: `${new Date()}` };
    dispatch(addNote(newNote));
    reset();
  }

  return (
    <VStack as={"form"} onSubmit={handleSubmit((event) => addNotes(event))} width={"100%"} color={"fontWhite"}>
      <Field invalid={errors.titleNote?.message ? true : false} errorText={errors.titleNote?.message}>
        <Text textAlign={"end"} width={"100%"} color={"silver"}>
          Sisa karakter : {50 - titleNoteLength}
        </Text>
        <Input
          placeholder="ini adalah judul ...."
          {...register("titleNote")}
          _focusWithin={(titleNoteLength <= 50 && { borderColor: "fontWhite" }) || { borderColor: "delete.active" }}
        ></Input>
      </Field>
      <Field invalid={errors.bodyNote?.message ? true : false} errorText={errors.bodyNote?.message}>
        <Textarea placeholder="tuliskan catatanmu disini ...." {...register("bodyNote")} _focusWithin={{ borderColor: "fontWhite" }} resize={"none"} minH={"150px"}></Textarea>
      </Field>
      <HStack width={"100%"}>
        <Button type="submit" width={"100%"} bg={"backgroundBase"} border={"1px solid"} borderColor={"fontWhite"}>
          submit
        </Button>
      </HStack>
    </VStack>
  );
}
