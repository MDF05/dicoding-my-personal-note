import { Box, HStack, Text } from "@chakra-ui/react";
import Search from "./Search";

export default function Navbar(): React.ReactNode {
  return (
    <HStack width={"100%"} borderBottom={"1px solid"} padding={"10px"} bg={"backgroundBase"} color={"white"} justifyContent={"space-between"}>
      <Box>
        <Text fontWeight={"bold"} fontSize={"3xl"}>
          Notes
        </Text>
      </Box>
      <Box width={{ base: "70%", md: "40%", lg: "30%" }}>
        <Search></Search>
      </Box>
    </HStack>
  );
}
