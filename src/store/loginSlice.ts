import { createSlice } from "@reduxjs/toolkit";

type TypeInitialState = {
    singIn: boolean;
    firstName: string,
    LastName: string,
    phone: string,
    email: string,
}

const initialState: TypeInitialState = {
  singIn: false,
  firstName: '',
  LastName: '',
  phone: '',
  email: '',
};

const loginSlice = createSlice({
   name: "login",
   initialState,
   reducers: {
      changeSingIn: (state, action) => {
        state.singIn = action.payload
      },
      setLoginName: (state, action) => {
        state.firstName = action.payload.firstName
        state.LastName = action.payload.lastName
        state.email = action.payload.email
        state.phone = action.payload.phone
      },
   }
});

export default loginSlice.reducer;
export const {changeSingIn} = loginSlice.actions;
export const {setLoginName} = loginSlice.actions;