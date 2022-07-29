import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
    name:"user",
    initialState: {id:"",name:"", email:"", img:"", signIn: false},
    reducers:{
        initUser: (state, action) => {
                state.name = action.payload.name;
                state.email = action.payload.email;
                state.img = action.payload.picture;
                state.signIn = true
        },
        SignUp: (state, action) => {
            state.signIn = action.payload;
        },
        upID:(state, action) =>{
            state.id = action.payload;
        }
    },
});

export const {initUser, SignUp,upID } = UserSlice.actions;
export default UserSlice.reducer;