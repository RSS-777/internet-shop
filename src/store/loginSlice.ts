import { createSlice } from "@reduxjs/toolkit";

type TypeInitialState = {
    singIn: boolean;
    name: string,
}

const initialState: TypeInitialState = {
  singIn: false,
  name: '',
};

const loginSlice = createSlice({
   name: "login",
   initialState,
   reducers: {
      changeSingIn: (state, action) => {
        state.singIn = action.payload
      },
      setLoginName: (state, action) => {
        state.name = action.payload
      }
   }
});

export default loginSlice.reducer;
export const {changeSingIn} = loginSlice.actions;
export const {setLoginName} = loginSlice.actions;