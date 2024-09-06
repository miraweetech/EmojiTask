import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { apiKey } from "../../api/Config";

export const fetchEmojis = createAsyncThunk(
  "emojis/fetchEmojis",
  async (query) => {
    const response = await axios.get(
      `https://cors-anywhere.herokuapp.com/https://emoji-api.com/emojis?search=${query}&access_key=${apiKey}`
    );
    return response.data;
  }
);

const EmojiSlice = createSlice({
  name: "emoji",
  initialState: {
    emojis: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmojis.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchEmojis.fulfilled, (state, action) => {
        state.emojis = action.payload;
        state.loading = false;
      })
      .addCase(fetchEmojis.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export default EmojiSlice.reducer;
