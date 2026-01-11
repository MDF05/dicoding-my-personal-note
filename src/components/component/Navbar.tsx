import { Box, HStack, Text } from "@chakra-ui/react";
import Search from "./Search";

export default function Navbar(): React.ReactNode {
  return (
    <HStack
      width={"90%"}
      mt={4}
      padding={"15px 25px"}
      borderRadius={"20px"}
      bg={"accent.glass"}
      backdropFilter={"blur(10px)"}
      border={"1px solid"}
      borderColor={"accent.glassBorder"}
      boxShadow={"0 8px 32px 0 rgba(31, 38, 135, 0.15)"}
      color={"fontWhite"}
      justifyContent={"space-between"}
      zIndex={100}
      position="sticky"
      top="20px"
    >
      <Box>
        <Text fontWeight={"bold"} fontSize={"3xl"} fontFamily={"heading"} bgGradient="linear(to-r, accent.cyan, accent.purple)" bgClip="text">
          Notes
        </Text>
      </Box>
      <Box width={{ base: "60%", md: "40%", lg: "30%" }}>
        <Search></Search>
      </Box>
    </HStack>
  );
}
