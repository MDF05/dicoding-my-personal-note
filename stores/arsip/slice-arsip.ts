import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NoteTypes } from "./../../src/types/note-types";
import { arsipState } from "./../../src/types/arsip-types";

let arsips: NoteTypes[] = [];

if (localStorage.getItem("arsips")) {
  arsips = JSON.parse(localStorage.getItem("arsips")!);
}

const initialState: arsipState = {
  arsips,
  filterArsips: [],
  querySearch: null,
};

const notesSlice = createSlice({
  name: "arsips",
  initialState,
  reducers: {
    addArsip: (state, action: PayloadAction<NoteTypes>) => {
      const newArsip: NoteTypes = action.payload;
      state.arsips = [...state.arsips, newArsip];
      localStorage.setItem("arsips", JSON.stringify(state.arsips));
    },
    deleteArsip: (state, action: PayloadAction<{ idNote: string }>) => {
      const noteId: string = action.payload.idNote;
      state.arsips = state.arsips.filter((note) => note.id !== noteId);
      localStorage.setItem("arsips", JSON.stringify(state.arsips));
    },
    filterArsip: (state, action: PayloadAction<{ query: string | null }>) => {
      state.querySearch = action.payload.query;
      const query: string | null = action.payload.query;
      if (query) {
        state.filterArsips = state.arsips.filter(
          (note) => note.titleNote.toLocaleLowerCase().includes(query.toLocaleLowerCase()) || note.bodyNote.toLocaleLowerCase().includes(query.toLocaleLowerCase()),
        );
      }
    },
  },
});

export const { addArsip, deleteArsip, filterArsip } = notesSlice.actions;

export default notesSlice.reducer;
