import {createSlice} from "@reduxjs/toolkit";

export const form3Slice = createSlice({
    name:"form3",
    initialState:{
        whenAvailable:'',
        whenAnswer:'',
        invitationInterview:'',
        rejectedApplications:'',
    },
    reducers:{
        setWhenAvailable: (state, action)=>{
            state.whenAvailable = action.payload
        },
        setWhenAnswer: (state, action)=>{
            state.whenAnswer = action.payload
        },
        setInvitationInterview: (state, action)=>{
            state.invitationInterview = action.payload
        },
        setRejectedApplications: (state, action)=>{
            state.rejectedApplications = action.payload
        },
    }
});

export const {setRejectedApplications,setInvitationInterview,setWhenAvailable, setWhenAnswer} = form3Slice.actions;

export default form3Slice.reducer
