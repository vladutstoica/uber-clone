import { createSlice } from "@reduxjs/toolkit"
import {RootState} from "../store";

const initialState = {
    origin: null,
    destination: null,
    travelTimeInformation: null
}

export const navSlice = createSlice({
    name: "nav",
    initialState: initialState,
    reducers: {
        setOrigin: (state, action) => {
            state.origin = action.payload
        },
        setDestination: (state, action) => {
            state.destination = action.payload
        },
        setTravelTimeInformation: (state, action) => {
            state.travelTimeInformation = action.payload
        }
    }
})

export const { setOrigin, setDestination, setTravelTimeInformation } = navSlice.actions

export const selectOrigin = (state : RootState) => state.nav.origin;
export const selectDestination = (state : RootState) => state.nav.destination;
export default navSlice.reducer;