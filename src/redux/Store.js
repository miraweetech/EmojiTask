import { configureStore } from '@reduxjs/toolkit'
import SearchSlice from './reducers/SearchSlice'
import EmojiSlice from './reducers/EmojiSlice'

export const Store = configureStore({
    reducer: {
        search: SearchSlice,
        emoji: EmojiSlice
    }
})