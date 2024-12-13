import { configureStore } from "@reduxjs/toolkit";
import musicPlayerReducer from "../reducers/MusicPlayerReducer";

const store = configureStore({
  reducer: musicPlayerReducer
});

export default store;
