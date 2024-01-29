import {createSlice} from "@reduxjs/toolkit";

export const form4Slice = createSlice({
    name:"form4",
    initialState:{
        interviewType:'',
        interviewPlan:''
    },
    reducers:{
        setInterviewType: (state, action)=>{
            state.interviewType = action.payload
        },
        setInterviewPlan: (state, action)=>{
            state.interviewPlan = action.payload
        }
    }
});

export const {setInterviewType, setInterviewPlan} = form4Slice.actions;

export default form4Slice.reducer
