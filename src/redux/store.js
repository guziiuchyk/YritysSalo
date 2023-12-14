import { configureStore } from '@reduxjs/toolkit'
import form1Reducer from "./slices/form1Slice";
import globalReducer from "./slices/globalSlice";
import form3Reducer from './slices/form3Slice'
export default configureStore({
    reducer: {
        form1: form1Reducer,
        form3: form3Reducer,
        global:globalReducer
    },
})