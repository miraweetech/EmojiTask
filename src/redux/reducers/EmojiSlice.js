import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  selectedEmoji: null
}

const EmojiSlice = createSlice({
  name: "emoji",
  initialState,
  reducers: {
    setSelectedEmoji: (state, action) => {
      state.selectedEmoji = action.payload
    }
  }
})

export const {setSelectedEmoji} = EmojiSlice.actions

export default EmojiSlice.reducer