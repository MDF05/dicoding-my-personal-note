import { Button } from "@chakra-ui/react";
import { useAppDispatch } from "../../../stores/stores";
import { NoteTypes } from "../../types/note-types";
import { addArsip } from "../../../stores/arsip/slice-arsip";
import { deleteNote } from "../../../stores/notes/slice-notes";

export default function ButtonAddArsip({ newNote }: { newNote: NoteTypes }) {
  const dispatch = useAppDispatch();
  function onArsipNote() {
    const confirmArsip = confirm("apakah kamu yakin ingin pindahkan ke catatan aktif");
    if (confirmArsip) {
      dispatch(deleteNote({ id: newNote.id }));
      dispatch(addArsip(newNote));
    }

    return newNote;
  }

  return (
    <Button w={"50%"} border={"1px solid"} borderColor={"fontWhite"} color={"arsip.active"} onClick={onArsipNote}>
      arsip
    </Button>
  );
}
