import {createSlice} from "@reduxjs/toolkit"

export const homeSlice = createSlice({
    name: 'home',
    initialState: {
        url: {},
        category :  {},
    },
    reducers: {
        getApiConfiguration: (state,action) => {
            state.url= action.payload
        },
        getCategory: (state , action) => {
            state.category= action.payload

        },
    },
    
})

export const {getApiConfiguration,getCategory} = homeSlice.actions;
export default homeSlice.reducer;