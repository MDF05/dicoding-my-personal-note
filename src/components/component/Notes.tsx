import React, { useEffect, useState } from "react";
import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import { useAppSelector } from "../../../stores/stores";
import ButtonDeleteNote from "./ButtonDeleteNote";
import ButtonArsipNote from "./ButtonAddArsip";
import { convertDate } from "@/utils/convert-date";
import { NoteTypes } from "@/types/note-types";

export default function Notes(): React.ReactNode {
  const state = useAppSelector((state) => state.notes);
  const [listNotes, setListNotes] = useState<NoteTypes[]>([]);

  useEffect(() => {
    if (state.querySearch) {
      setListNotes(state.filterNotes);
    } else setListNotes(state.notes);
  }, [state]);

  if (listNotes.length == 0)
    return (
      <Box position={"absolute"} width={"100%"} textAlign={"center"} color={"fontPasif"}>
        tidak ada catatan
      </Box>
    );

  return (
    <>
      {listNotes.map((note, index) => {
        return (
          <VStack border={"1px solid"} borderColor={"fontWhite"} textAlign={"left"} w={"100%"} gap={"0px"} p={"0px"} rounded={"5px"} key={index}>
            <VStack w={"100%"} gap={"0px"} p={"5px"}>
              <Text fontWeight={"bold"} w={"100%"} m={"0"} overflow={"hidden"} height={"20px"} textOverflow={"ellipsis"} whiteSpace="nowrap">
                {note.titleNote}
              </Text>
              <Text color={"fontPasif"} fontSize={"small"} w={"100%"} m={"0"} height={"20px"}>
                {convertDate(note.createdAt)}
              </Text>
            </VStack>
            <VStack w={"100%"} p={"5px"}>
              <Text
                w={"100%"}
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: 8, // Batasi ke 3 baris
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "normal",
                }}
                minH={"190px"}
              >
                {note.bodyNote}
              </Text>
            </VStack>
            <HStack borderTop={"1px solid"} borderColor={"fontWhite"} width={"100%"} gap={"0"}>
              <ButtonDeleteNote idNote={note.id}></ButtonDeleteNote>
              <ButtonArsipNote newNote={note}></ButtonArsipNote>
            </HStack>
          </VStack>
        );
      })}
    </>
  );
}
