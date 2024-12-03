export interface NoteTypes {
  id: string;
  titleNote: string;
  bodyNote: string;
  createdAt: string;
}

export interface NotesState {
  notes: NoteTypes[];
  filterNotes: NoteTypes[];
  querySearch: string | null;
}
