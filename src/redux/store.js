import { configureStore } from '@reduxjs/toolkit'
import form1Reducer from "./slices/form1Slice";
import globalReducer from "./slices/globalSlice";

export default configureStore({
    reducer: {
        form1: form1Reducer,
        global:globalReducer
    },
})