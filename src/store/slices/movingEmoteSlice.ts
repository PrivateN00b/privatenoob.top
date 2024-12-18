import { createSlice } from "@reduxjs/toolkit";

interface MovingEmoteSlice {
    isActive: boolean;
}

const initialState: MovingEmoteSlice = {
    isActive: false
}

const movingEmoteSlice = createSlice({
    name: "movingEmote",
    initialState,
    reducers: {
        changeActivation: (state) => {
            state.isActive = !state.isActive;
        }
    }
});

export const { changeActivation } = movingEmoteSlice.actions;

export default movingEmoteSlice.reducer;