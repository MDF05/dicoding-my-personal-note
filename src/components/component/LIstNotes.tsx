import { BoxProps, Grid } from "@chakra-ui/react";

interface ListNotesProps extends BoxProps {
  children: React.ReactNode;
}

export default function ListNotes(props: ListNotesProps): React.ReactNode {
  const { children } = props;

  return (
    <Grid pb={"50px"} gridTemplateColumns={{ base: "repeat(1,100%)", md: "repeat(2,49%)", lg: "repeat(3, 30%)" }} width={"100%"} color={"white"} gap={"10px"} position={"relative"}>
      {children}
    </Grid>
  );
}
