import { NoteTypes } from "./note-types";

export interface arsipState {
  arsips: NoteTypes[];
  filterArsips: NoteTypes[];
  querySearch: string | null;
}
