import { Button } from "@chakra-ui/react";
import { deleteNoteProps } from "../types/delete-note-types";
import { useAppDispatch } from "../../../stores/stores";
import { deleteArsip } from "../../../stores/arsip/slice-arsip";

export default function ButtonDeleteArsip({ idNote }: deleteNoteProps): React.ReactNode {
  const dispatch = useAppDispatch();

  function onDeleteNote() {
    confirm("apakah kamu yakin menghapus catatan ini") ? dispatch(deleteArsip({ idNote: idNote })) : "";
    return idNote;
  }

  return (
    <Button w={"50%"} border={"1px solid"} borderColor={"fontWhite"} color={"delete.active"} onClick={onDeleteNote}>
      Delete
    </Button>
  );
}
