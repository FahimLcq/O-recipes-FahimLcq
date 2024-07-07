import Page from "../Page";
import AppHeader from "../AppHeader";
import Content from "../Content";
import { useAppSelector } from "../../hooks/redux";
import axios from "axios";
import { useLoaderData } from "react-router-dom";
import { Recipe } from "../../@types/recipe";

export async function favLoader() {
  try {
    const response = await axios.get("http://localhost:3000/api/favorites", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

function Favorites() {
  //   const recipes = useAppSelector((state) => state.recipes.list);

  const { favorites } = useLoaderData() as Recipe[];

  const recipes = favorites;
  return (
    <Page>
      <AppHeader />
      <Content
        title="Mes plats favoris"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, explicabo."
        recipes={recipes}
      />
    </Page>
  );
}

export default Favorites;
