import { Button } from "@chakra-ui/react";
import { useAppDispatch } from "../../../stores/stores";
import { NoteTypes } from "./../../types/note-types";
import { deleteArsip } from "../../../stores/arsip/slice-arsip";
import { addNote } from "../../../stores/notes/slice-notes";

export default function ButtonAddNote({ newNote }: { newNote: NoteTypes }): React.ReactNode {
  const dispatch = useAppDispatch();
  function onArsipNote() {
    const confirmArsip = confirm("apakah kamu yakin mengarsip catatan ini");
    if (confirmArsip) {
      dispatch(addNote(newNote));
      dispatch(deleteArsip({ idNote: newNote.id }));
    }

    return newNote;
  }

  return (
    <Button w={"50%"} border={"1px solid"} borderColor={"fontWhite"} color={"arsip.active"} onClick={onArsipNote}>
      pindahkan
    </Button>
  );
}
