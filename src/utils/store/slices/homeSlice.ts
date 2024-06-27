import { createSlice } from "@reduxjs/toolkit";

const getUrls = () => {
  if (typeof window !== "undefined") {
    let data = localStorage.getItem("images");
    console.log(data);
    if (data) {
      return JSON.parse(data);
    } else return {};
  }
};

const _initialState = {
  url: getUrls(),
  category: {},
};
export const homeSlice = createSlice({
  name: "home",
  initialState: _initialState,
  reducers: {
    getApiConfiguration: (state, action) => {
      localStorage.setItem("images", JSON.stringify(action.payload));
      state.url = action.payload;
    },
    getCategory: (state, action) => {
      state.category = action.payload;
    },
  },
});

export const { getApiConfiguration, getCategory } = homeSlice.actions;
export default homeSlice.reducer;
