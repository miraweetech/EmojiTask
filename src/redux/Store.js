import { configureStore } from '@reduxjs/toolkit'
import EmojiSlice from './reducers/EmojiSlice'


export const Store = configureStore({
    reducer: {
        emoji: EmojiSlice,
    }
})