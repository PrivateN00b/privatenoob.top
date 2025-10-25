export { onBeforePrerenderStart }

import pathNames from "../../../../utils/pathNames";
import { RecipeDict } from "../utils/RecipesTypes";
import recipesJSON from "../utils/recipes.json";
 
async function onBeforePrerenderStart() {
  const recipes: RecipeDict[] = JSON.parse(
              JSON.stringify(recipesJSON)
          ) as RecipeDict[];

  /* This contains the prerendering config for the /recipes endpoint
  *  Apparently by providing recipes JSON content in pageContext, then data() won't be called in +data.ts
  *    NOTE: +data.ts file still need to exist for some reason
  *  Development environments don't use onBeforePrerenderStart so, this may cause inconsistencies between the 2 environments
  */
  const recipesListPage = {
    url: `/${pathNames.recipes}`,
    pageContext: {
      data: {
        recipes: JSON.parse(
              JSON.stringify(recipesJSON)
          ) as RecipeDict[]
      }
    }
  }

  /* This contains the prerendering config for the /recipes/@id endpoints (so all recipe pages)
  *  Apparently by providing recipes JSON content in pageContext, then data() won't be called in +data.ts
  *    NOTE: +data.ts file still need to exist for some reason
  *  Development environments don't use onBeforePrerenderStart so, this may cause inconsistencies between the 2 environments
  */
  const recipePages = recipes.map((recipe) => {
      return {
        url: `/${pathNames.recipes}/${recipe.to}`,
      }
    });

  return [
    recipesListPage,
    ...recipePages
  ]
}