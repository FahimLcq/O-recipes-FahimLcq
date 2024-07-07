import { createReducer } from "@reduxjs/toolkit";
import { login, logout, tokenCheck } from "../actions/authentication";

interface UserState {
  logged: boolean;
  pseudo: string | undefined | null;
  errorMessage: string | null;
}
export const initialState: UserState = {
  logged: false,
  pseudo: undefined,
  errorMessage: null,

};

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(login.pending, (state) => {
      // state.logged = !state.logged;
    })
    .addCase(login.fulfilled, (state, action) => {
      console.log("Connexion réussie :", action.payload);
      console.log("logged:", action.payload.logged)
      state.logged = action.payload.logged;
      state.pseudo = action.payload.pseudo;

      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("pseudo", action.payload.pseudo);
    })
    .addCase(login.rejected, (state) => {
      // state.logged = !state.logged;
      state.errorMessage = "Identifiant ou mot de passe incorrect";
    })
    .addCase(logout, (state) => {
      state.pseudo = null;
      state.logged = false;
      localStorage.removeItem("token");
    })
    .addCase(tokenCheck, (state, action) => {
      state.logged = true
      state.pseudo = localStorage.getItem("pseudo")
    })
});

export default userReducer;
