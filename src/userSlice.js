import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        name: "",
        email: ""
    },
    reducers:{
        userData:(state,action) => {
            state.name = action.payload.name;
            state.email = action.payload.email ;
        },
        logOut: (state) => {
            state.name = "" ;
            state.email = "" ;
        }
    }
}) 

export const { userData, logOut } = userSlice.actions;
export default userSlice.reducer ;