import { createAction, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";



export const LOGIN = "LOGIN"
export const LOGOUT = "LOGOUT"
export const TOKEN_CHECK = "TOKEN_CHECK"

export const logout = createAction(LOGOUT)
export const tokenCheck = createAction(TOKEN_CHECK)

//Permet de gérer les requêtes asynchrones, plus gérer chaque état de la requete côté reducer
export const login = createAsyncThunk(LOGIN, async (formData) => {
    const response = await axios.post("http://localhost:3000/api/login", formData);
    //action.payload=response.data
    return response.data;
  });