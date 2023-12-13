import {createSlice} from "@reduxjs/toolkit";

export const form1Slice = createSlice({
    name:"form1",
    initialState:{
        requiredSkills:'',
        purposeCompany: '',
        recruitmentPlan:'',
        recruitingBudget:''
    },
    reducers:{
        setRequiredSkills: (state, action)=>{
            state.requiredSkills = action.payload
        },
        setPurposeCompany: (state, action)=>{
            state.purposeCompany = action.payload
        },
        setRecruitmentPlan: (state, action)=>{
            state.recruitmentPlan = action.payload
        },
        setRecruitingBudget: (state, action)=>{
            state.recruitingBudget = action.payload
        }
    }
});

export const {setRequiredSkills,setPurposeCompany, setRecruitmentPlan, setRecruitingBudget} = form1Slice.actions;

export default form1Slice.reducer
