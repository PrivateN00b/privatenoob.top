import { configureStore } from '@reduxjs/toolkit';
import movingEmoteReducer from './slices/movingEmoteSlice';
import mouseCoordsReducer from './slices/mouseCoordsSlice';

export const store = configureStore({
  reducer: {
    movingEmote: movingEmoteReducer,
    mouseCoords: mouseCoordsReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch