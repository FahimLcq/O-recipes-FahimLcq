import { createAction, createReducer } from "@reduxjs/toolkit";
import data from "../../data";
import { Recipe } from "../../@types/recipe";

interface RecipesState {
  list: Recipe[];
}
export const initialState: RecipesState = {
  list: data,
};

export const setRecipes = createAction<Recipe[]>("SET_RECIPES");

const recipesReducer = createReducer(initialState, (builder) => {
  builder.addCase(setRecipes, (state, action) => {
    console.log(action.payload)
    state.list = action.payload;
  });
});

export default recipesReducer;
