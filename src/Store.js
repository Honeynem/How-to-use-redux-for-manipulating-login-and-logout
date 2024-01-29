import { configureStore , createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name : 'user',
    // the first values of our states. we have only one state for now then-->
    initialState : {username : ''},
    // the functions that wanna change our states
    reducers : {
        login : (state , action)=>{
            state.username = action.payload.username
        },
        logout : (state)=>{
            state.username = ''
        }
    }
})

export const {login , logout} = userSlice.actions
export const store = configureStore({reducer : {
    user : userSlice.reducer
} })