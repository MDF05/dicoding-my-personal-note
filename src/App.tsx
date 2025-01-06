import { HStack, VStack } from "@chakra-ui/react";
import Navbar from "./components/component/Navbar";
import HeadingNotes from "./components/component/HeadingNotes";
import FormAddNotes from "./components/component/FormAddNotes";
import ListNotes from "./components/component/LIstNotes";
import Notes from "./components/component/Notes";
import Arsips from "./components/component/arsips";
import { useAppSelector } from "../stores/stores";

function App() {
  const state = useAppSelector((state) => state.notes);

  return (
    <HStack display={"flex"} flexDirection={"column"} width={"100%"} bg={"backgroundBase"} height={"100vh"} overflowY={"auto"} alignItems={"center"}>
      <Navbar></Navbar>
      {!state?.querySearch && (
        <VStack width={{ base: "90%", md: "80%", lg: "40%" }}>
          <HeadingNotes text="Buat Catatan" />
          <FormAddNotes></FormAddNotes>
        </VStack>
      )}
      <VStack width={"80%"}>
        <HeadingNotes text="Catatan Aktif" />
        <ListNotes>
          <Notes />
        </ListNotes>
      </VStack>
      <VStack width={"80%"}>
        <HeadingNotes text="Arsip" />
        <ListNotes>
          <Arsips />
        </ListNotes>
      </VStack>
    </HStack>
  );
}

export default App;
