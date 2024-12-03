import { Box, Input } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button } from "./components/ui/button";
import { searchSchema, SearchSchema } from "./schemas/search-shema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppDispatch, useAppSelector } from "../stores/stores";
import { filterNotes } from "../stores/notes/slice-notes";
import { filterArsip } from "../stores/arsip/slice-arsip";

export default function Search(): React.ReactNode {
  const { register, handleSubmit, watch } = useForm<SearchSchema>({ resolver: zodResolver(searchSchema) });
  const dispatch = useAppDispatch();
  const query = watch("query");
  const state = useAppSelector((state) => state.notes.filterNotes);

  useEffect(() => {
    if (query == "") {
      dispatch(filterNotes({ query: null }));
      dispatch(filterArsip({ query: null }));
    }
  }, [query]);

  function onSearch(event: SearchSchema) {
    dispatch(filterNotes({ query: event.query }));
    dispatch(filterArsip({ query: event.query }));
  }

  return (
    <Box as={"form"} onSubmit={handleSubmit((event) => onSearch(event))}>
      <Input placeholder="Cari catatan ..." width={"100%"} color={"white"} fontWeight={"bold"} _focusWithin={{ borderColor: "white" }} {...register("query")}></Input>
      <Button type={"submit"} hidden></Button>
    </Box>
  );
}
