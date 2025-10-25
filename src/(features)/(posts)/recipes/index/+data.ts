import type { PageContextServer } from "vike/types";
import { RecipeDict } from "../utils/RecipesTypes";
import recipesJSON from "../utils/recipes.json";

export const data = async (pageContext: PageContextServer) => {

    const localRecipes: RecipeDict[] = JSON.parse(
        JSON.stringify(recipesJSON)
    ) as RecipeDict[];

    return localRecipes
}