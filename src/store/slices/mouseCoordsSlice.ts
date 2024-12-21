import { createSlice } from "@reduxjs/toolkit"

interface MouseCoordsSlice {
    x: number,
    y: number
}

const initialState: MouseCoordsSlice = {
    x: 0,
    y: 0
}

const mouseCoordsSlice = createSlice({
    name: "mouseCoords",
    initialState,
    reducers: {
        changeCoords: (state, action) => {
            const coords = action.payload;
            state.x = coords.x;
            state.y = coords.y;
        }
    }
})

export const { changeCoords } = mouseCoordsSlice.actions;

export default mouseCoordsSlice.reducer;