import { createSlice } from "@reduxjs/toolkit";

const SearchSlice = createSlice({
  name: "search",
  initialState: {
    searchEntry: "",
  },
  reducers: {
    setSearchEntry: (state, action) => {
      state.searchEntry = action.payload;
    },
  },
});

export const { setSearchEntry } = SearchSlice.actions;

export default SearchSlice.reducer;
