import { Flex, Text } from "@chakra-ui/react";
import { HeadingNotesProps } from "../types/heading-notes-types";

export default function HeadingNotes({ text }: HeadingNotesProps): React.ReactNode {
  return (
    <Flex width={"100%"} py={"30px"}>
      <Text textAlign={"left"} color={"fontWhite"}>
        {text}
      </Text>
    </Flex>
  );
}
