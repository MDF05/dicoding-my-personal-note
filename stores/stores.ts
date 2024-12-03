import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import noteReducer from "./notes/slice-notes";
import arsipReducer from "./arsip/slice-arsip";

const stores = configureStore({
  reducer: {
    notes: noteReducer,
    arsips: arsipReducer,
  },
});

export type RootState = ReturnType<typeof stores.getState>;
export type AppDispatch = typeof stores.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

export default stores;
