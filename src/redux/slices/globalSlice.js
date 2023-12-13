import {createSlice} from "@reduxjs/toolkit";

export const globalSlice = createSlice({
    name:"form1",
    initialState:{
        leftDistance:0,
        rightDistance:0
    },
    reducers:{
        setLeftDistance: (state, action)=>{
            state.leftDistance = action.payload
        },
        setRightDistance: (state, action)=>{
            state.rightDistance = action.payload
        },
    }
});

export const {setRightDistance, setLeftDistance} = globalSlice.actions;

export default globalSlice.reducer
