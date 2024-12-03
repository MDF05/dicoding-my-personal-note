import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NotesState, NoteTypes } from "./../../src/types/note-types";

let notes: NoteTypes[] = [];

if (localStorage.getItem("notes")) {
  notes = JSON.parse(localStorage.getItem("notes")!) as NoteTypes[];
}

const initialState: NotesState = {
  notes,
  filterNotes: [],
  querySearch: null,
};

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<NoteTypes>) => {
      const newNote: NoteTypes = action.payload;
      state.notes = [...state.notes, newNote];
      localStorage.setItem("notes", JSON.stringify(state.notes));
    },
    deleteNote: (state, action: PayloadAction<{ id: string }>) => {
      const noteId: string = action.payload.id;
      state.notes = state.notes.filter((note) => note.id !== noteId);
      localStorage.setItem("notes", JSON.stringify(state.notes));
    },
    filterNotes: (state, action: PayloadAction<{ query: string | null }>) => {
      const query: string | null = action.payload.query;
      state.querySearch = query;
      if (query) {
        state.filterNotes = state.notes.filter(
          (note) => note.titleNote.toLowerCase().includes(query.toLocaleLowerCase()) || note.bodyNote.toLowerCase().includes(query.toLocaleLowerCase()),
        );
      }
    },
  },
});

export const { addNote, deleteNote, filterNotes } = notesSlice.actions;

export default notesSlice.reducer;
