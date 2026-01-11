import React, { useEffect, useState } from "react";
import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import { useAppSelector } from "../../../stores/stores";
import ButtonDeleteNote from "./ButtonDeleteNote";
import ButtonArsipNote from "./ButtonAddArsip";
import { convertDate } from "@/utils/convert-date";
import { NoteTypes } from "@/types/note-types";
import { motion } from "framer-motion";

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
          <VStack
            as={motion.div}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            // @ts-ignore
            transition={{ delay: index * 0.1 }}
            whileHover={{
              scale: 1.05,
              rotateX: 5,
              rotateY: 5,
              boxShadow: "0 20px 40px rgba(0, 242, 255, 0.2)",
              zIndex: 10,
            }}
            border={"1px solid"}
            borderColor={"accent.glassBorder"}
            textAlign={"left"}
            w={"100%"}
            gap={"0px"}
            p={"0px"}
            rounded={"xl"}
            key={index}
            bg="accent.glass"
            backdropFilter="blur(10px)"
            boxShadow="0 4px 10px rgba(0,0,0,0.1)"
            overflow="hidden"
            cursor="pointer"
            style={{ perspective: 1000 }}
          >
            <VStack w={"100%"} gap={"0px"} p={"15px"} bgGradient="linear(to-b, rgba(255,255,255,0.1), rgba(255,255,255,0))">
              <Text fontWeight={"bold"} w={"100%"} m={"0"} overflow={"hidden"} height={"25px"} textOverflow={"ellipsis"} whiteSpace="nowrap" fontFamily="heading" fontSize="lg" color="fontWhite">
                {note.titleNote}
              </Text>
              <Text color={"fontPasif"} fontSize={"xs"} w={"100%"} m={"0"} height={"20px"}>
                {convertDate(note.createdAt)}
              </Text>
            </VStack>
            <VStack w={"100%"} p={"15px"}>
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
                minH={"150px"}
                color="gray.700"
                fontSize="sm"
              >
                {note.bodyNote}
              </Text>
            </VStack>
            <HStack width={"100%"} gap={"0"} p={2} bg="rgba(0,0,0,0.02)">
              <ButtonDeleteNote idNote={note.id}></ButtonDeleteNote>
              <ButtonArsipNote newNote={note}></ButtonArsipNote>
            </HStack>
          </VStack>
        );
      })}
    </>
  );
}
