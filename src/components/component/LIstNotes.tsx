import { BoxProps, Grid } from "@chakra-ui/react";

interface ListNotesProps extends BoxProps {
  children: React.ReactNode;
}

export default function ListNotes(props: ListNotesProps): React.ReactNode {
  const { children } = props;

  return (
    <Grid pb={"50px"} gridTemplateColumns={"repeat(3, 30%)"} width={"100%"} color={"white"} gap={"10px"} position={"relative"}>
      {children}
    </Grid>
  );
}
