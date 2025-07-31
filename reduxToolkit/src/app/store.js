import { configureStore } from "@reduxjs/toolkit";
import Todoreducers from "../features/todo/todoSlice";

export const store = configureStore({
  reducer: Todoreducers,
});
