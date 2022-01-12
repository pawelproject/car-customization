import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  model: {},
  engine: {},
  gearbox: {},
  color: {},
  summaryPrice: 0,
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    change: (state, action) => {
      const { elementType, elementData } = action.payload;

      state[elementType] = elementData;

      // Checking if new model has elements which the old one had
      if (elementType === "model") {
        if (state.engine?.id && !state.model.engine.includes(state.engine.id)) {
          state.engine = state.gearbox = {};
        }
        if (state.color?.id && !state.model.color.includes(state.color.id)) {
          state.color = {};
        }
      }
      // Checking if new engine has elements which the old one had
      else if (elementType === "engine") {
        if (
          state.gearbox?.id &&
          !state.engine.gearbox.includes(state.gearbox.id)
        ) {
          state.gearbox = {};
        }
      }

      // summing up price
      state.summaryPrice =
        (state.model?.price || 0) +
        (state.engine?.price || 0) +
        (state.gearbox?.price || 0) +
        (state.color?.price || 0);
    },
  },
});

export const { change } = settingsSlice.actions;

export default settingsSlice.reducer;
