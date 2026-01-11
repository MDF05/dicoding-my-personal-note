import { HStack, VStack, Box } from "@chakra-ui/react";
import Navbar from "./components/component/Navbar";
import HeadingNotes from "./components/component/HeadingNotes";
import FormAddNotes from "./components/component/FormAddNotes";
import ListNotes from "./components/component/LIstNotes";
import Notes from "./components/component/Notes";
import Arsips from "./components/component/arsips";
import { useAppSelector } from "../stores/stores";
import { motion } from "framer-motion";

function App() {
  const state = useAppSelector((state) => state.notes);

  return (
    <Box
      width="100%"
      minH="100vh"
      bgGradient="linear(to-br, #f5f7fa, #c3cfe2)" // Fallback
      position="relative"
      overflow="hidden"
      fontFamily="body"
    >
      {/* Animated Background */}
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          position: "absolute",
          top: "-50%",
          left: "-50%",
          width: "200%",
          height: "200%",
          background: "radial-gradient(circle, #00f2ff 0%, transparent 70%)",
          opacity: 0.1,
          zIndex: 0,
        }}
      />
      <motion.div
        animate={{
          rotate: [360, 0],
          translateY: [0, 50, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          position: "absolute",
          bottom: "-50%",
          right: "-50%",
          width: "150%",
          height: "150%",
          background: "radial-gradient(circle, #bc13fe 0%, transparent 70%)",
          opacity: 0.1,
          zIndex: 0,
        }}
      />

      {/* Main Content with Perspective */}
      <HStack
        as={motion.div}
        display={"flex"}
        flexDirection={"column"}
        width={"100%"}
        height={"100vh"}
        overflowY={"auto"}
        alignItems={"center"}
        position="relative"
        zIndex={1}
        style={{ perspective: "1000px" }}
      >
        <Navbar></Navbar>
        {!state?.querySearch && (
          <VStack
            width={{ base: "90%", md: "80%", lg: "40%" }}
            mt={8}
            as={motion.div}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            // @ts-ignore
            transition={{ duration: 0.5 }}
          >
            <HeadingNotes text="Buat Catatan" />
            <FormAddNotes></FormAddNotes>
          </VStack>
        )}
        <VStack
          width={"80%"}
          mt={10}
          as={motion.div}
          initial={{ opacity: 0, z: -100 }}
          animate={{ opacity: 1, z: 0 }}
          // @ts-ignore
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <HeadingNotes text="Catatan Aktif" />
          <ListNotes>
            <Notes />
          </ListNotes>
        </VStack>
        <VStack
          width={"80%"}
          mt={10}
          mb={10}
          as={motion.div}
          initial={{ opacity: 0, z: -100 }}
          animate={{ opacity: 1, z: 0 }}
          // @ts-ignore
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <HeadingNotes text="Arsip" />
          <ListNotes>
            <Arsips />
          </ListNotes>
        </VStack>
      </HStack>
    </Box>
  );
}

export default App;
