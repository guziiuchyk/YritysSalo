import { configureStore } from '@reduxjs/toolkit';
import form1Reducer from "./slices/form1Slice";
import form2Reducer from "./slices/form2Slice";
import globalReducer from "./slices/globalSlice";
import form3Reducer from './slices/form3Slice';
import form4Reducer from './slices/form4Slice';
export default configureStore({
    reducer: {
        form1: form1Reducer,
        form2: form2Reducer,
        form3: form3Reducer,
        form4: form4Reducer,
        global:globalReducer
    },
})