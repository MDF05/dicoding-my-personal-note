import React, { useEffect, useState } from "react";
import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import { useAppSelector } from "../../../stores/stores";
import ButtonAddNote from "./ButtonAddNote";
import ButtonDeleteArsip from "./ButtonDeleteArsip";
import { convertDate } from "@/utils/convert-date";
import { NoteTypes } from "@/types/note-types";

export default function Arsips(): React.ReactNode {
  const state = useAppSelector((state) => state.arsips);
  const [listArsips, setListArsips] = useState<NoteTypes[]>([]);

  useEffect(() => {
    if (state.querySearch) {
      setListArsips(state.filterArsips);
    } else setListArsips(state.arsips);
  }, [state]);

  if (listArsips.length == 0)
    return (
      <Box position={"absolute"} width={"100%"} textAlign={"center"} color={"fontPasif"}>
        tidak ada catatan
      </Box>
    );

  return (
    <>
      {listArsips.map((arsip, index) => {
        return (
          <VStack border={"1px solid"} borderColor={"fontWhite"} textAlign={"left"} w={"100%"} gap={"0px"} p={"0px"} rounded={"5px"} key={index}>
            <VStack w={"100%"} gap={"0px"} p={"5px"}>
              <Text fontWeight={"bold"} w={"100%"} m={"0"} overflow={"hidden"} height={"20px"} textOverflow={"ellipsis"} whiteSpace="nowrap">
                {arsip.titleNote}
              </Text>
              <Text color={"fontPasif"} fontSize={"small"} w={"100%"} m={"0"} height={"20px"}>
                {convertDate(arsip.createdAt)}
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
                {arsip.bodyNote}
              </Text>
            </VStack>
            <HStack borderTop={"1px solid"} borderColor={"fontWhite"} width={"100%"} gap={"0"}>
              <ButtonDeleteArsip idNote={arsip.id}></ButtonDeleteArsip>
              <ButtonAddNote newNote={arsip}></ButtonAddNote>
            </HStack>
          </VStack>
        );
      })}
    </>
  );
}
