import { configureStore } from "@reduxjs/toolkit";
import settingsReducer from "./reducers/settingsSlice";

export default configureStore({
  reducer: {
    settings: settingsReducer,
  },
});
