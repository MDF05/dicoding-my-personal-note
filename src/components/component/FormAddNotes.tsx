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
    <VStack
      as={"form"}
      onSubmit={handleSubmit((event) => addNotes(event))}
      width={"100%"}
      color={"fontWhite"}
      bg="accent.glass"
      backdropFilter="blur(10px)"
      p={6}
      borderRadius="xl"
      boxShadow="0 8px 32px 0 rgba(31, 38, 135, 0.15)"
      border="1px solid"
      borderColor="accent.glassBorder"
    >
      <Field invalid={errors.titleNote?.message ? true : false} errorText={errors.titleNote?.message}>
        <Text textAlign={"end"} width={"100%"} color={"fontPasif"} fontSize="sm">
          Sisa karakter : {50 - titleNoteLength}
        </Text>
        <Input
          placeholder="Judul Catatan..."
          {...register("titleNote")}
          bg="rgba(255,255,255,0.8)"
          color="black"
          _placeholder={{ color: "gray.500" }}
          border="none"
          boxShadow="inner"
          _focus={{ boxShadow: "0 0 0 2px #00f2ff", bg: "white" }}

        ></Input>
      </Field>
      <Field invalid={errors.bodyNote?.message ? true : false} errorText={errors.bodyNote?.message}>
        <Textarea
          placeholder="Tuliskan catatanmu disini..."
          {...register("bodyNote")}
          resize={"none"}
          minH={"150px"}
          bg="rgba(255,255,255,0.8)"
          color="gray.800"
          _placeholder={{ color: "gray.500" }}
          border="none"
          boxShadow="inner"
          _focus={{ boxShadow: "0 0 0 2px #bc13fe", bg: "white" }}
        ></Textarea>
      </Field>
      <HStack width={"100%"} gap={4}>
        <Button
          type="submit"
          width={"100%"}
          bgGradient="linear(to-r, accent.cyan, accent.purple)"
          color="white"
          _hover={{ filter: "brightness(1.1)" }}
          borderRadius="full"
          boxShadow="0 4px 15px rgba(0, 242, 255, 0.4)"
        >
          Simpan Catatan
        </Button>
      </HStack>
    </VStack>
  );
}
