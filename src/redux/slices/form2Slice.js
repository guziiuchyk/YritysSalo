import {createSlice} from "@reduxjs/toolkit";

export const form2Slice = createSlice({
    name:"form2",
    initialState:{
        companyLocation:'',
        oneJobLocation:'',
        manyJobsLocation:'',
        companyDescription:'',
        contractType:'',
        workingTime:'',
        workingTimeStart:'',
        workingTimeEnd:'',
        workPosition:'',
        jobDescription:'',
        notifierName:'',
        notifierPhoneNumber:'',
        receivingEMail:'',
        publicationTime:'',
        contactPersons:''
    },
    reducers:{
        setCompanyLocation: (state, action)=>{
            state.companyLocation = action.payload
        },
        setOneJobLocation: (state, action)=>{
            state.oneJobLocation = action.payload
        },
        setManyJobsLocation: (state, action)=>{
            state.manyJobsLocation = action.payload
        },
        setCompanyDescription: (state, action)=>{
            state.companyDescription = action.payload
        },
        setWorkingTimeStart: (state, action)=>{
            state.workingTimeStart = action.payload
        },
        setWorkingTimeEnd: (state, action)=>{
            state.workingTimeEnd = action.payload
        },
        setContractType: (state, action)=>{
            state.contractType = action.payload
        },
        setWorkPosition: (state, action)=>{
            state.workPosition = action.payload
        },
        setJobDescription: (state, action) => {
            state.jobDescription = action.payload
        },
        setNotifierPhoneNumber: (state, action) => {
            state.notifierPhoneNumber = action.payload
        },
        setReceivingEMail: (state, action) => {
            state.receivingEMail = action.payload
        },
        setPublicationTime: (state, action) => {
            state.publicationTime = action.payload
        },
        setContactPersons: (state, action) => {
            state.contactPersons = action.payload
        },
        setNotifierName: (state, action) => {
            state.notifierName = action.payload
        },
        setWorkingTime: (state, action) => {
            state.workingTime = action.payload
        },

    }
});

export const {setContactPersons,setPublicationTime,setReceivingEMail,setNotifierPhoneNumber, setCompanyDescription,setCompanyLocation,setJobDescription,setOneJobLocation,setManyJobsLocation,setNotifierName,setContractType,setWorkingTime,setWorkPosition,setWorkingTimeStart,setWorkingTimeEnd} = form2Slice.actions;

export default form2Slice.reducer
