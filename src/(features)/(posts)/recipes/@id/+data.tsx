import { useConfig } from "vike-react/useConfig";
import type { PageContextServer } from "vike/types";
import recipesJSON from "../utils/recipes.json";
import { RecipeDict } from "../utils/RecipesTypes";
import pathNames from "../../../../utils/pathNames";

export const data = async (pageContext: PageContextServer) => {
    const config = useConfig()

    const recipes: RecipeDict[] = JSON.parse(
        JSON.stringify(recipesJSON)
    );
    const currentRecipe: RecipeDict = recipes.find(recipe => 
        pageContext.urlParsed.pathname == `/${pathNames.recipes}/${recipe.to}`
    ) as RecipeDict;

    config({
        title: currentRecipe.title
    });

    return currentRecipe;
}