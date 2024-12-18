import styled from "styled-components";
import CenteredH1 from "../../../components/text/CenteredH1";
import Container from "../../../components/div/Container";
import { Recipe } from "./components/Recipe";
import Filters from "./components/Filters";
import recipesJSON from "./utils/recipes.json";
import { useEffect, useState } from "react";
import { FilterDict, RecipeDict } from "./utils/RecipesTypes";
import { Cost, Meal } from "./utils/RecipesEnums";
import LeftSideDiv from "../../../components/div/LeftSideDiv";
import MainDiv from "../../../components/div/MainDiv";

const RecipeList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 20px;
  padding-bottom: 40px;
  margin: 0 30px;
  flex-wrap: wrap;
`;

function Recipes() {
  // Get the recipes from the server and from recipes.json
  const [recipes, setRecipes] = useState([] as RecipeDict[]);
  const localRecipes: RecipeDict[] = JSON.parse(
    JSON.stringify(recipesJSON)
  ) as RecipeDict[];

  useEffect(() => {
    fetch(`${import.meta.env.VITE_REACT_APP_SERVER_URL}/Recipe`)
      .then((res) => res.json())
      .then((res) => {
        // Combine the 2 datasets
        setRecipes([...(res as RecipeDict[]), ...localRecipes]);
      })
      .catch(() => setRecipes(localRecipes));
  }, []);

  // Set filter values
  const [filterValues, setFilterValues] = useState<FilterDict>({
    types: [],
    restrictions: [],
    costs: [],
  });

  const handleFilterValues = (
    key: keyof FilterDict,
    name: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    e.target.checked
      ? setFilterValues({
          ...filterValues,
          [key]: [...filterValues[key], name],
        })
      : setFilterValues({
          ...filterValues,
          [key]: filterValues[key].filter((value) => value !== name),
        });
    console.log("UwU");
  };

  const handleFilterChange = (
    name: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (["Breakfast", "Dinner", "Lunch", "Pastry"].includes(name)) {
      handleFilterValues("types", name, e);
    } else if (["Vegetarian", "Vegan"].includes(name)) {
      handleFilterValues("restrictions", name, e);
    } else {
      handleFilterValues("costs", name, e);
    }
  };

  const renderRecipes = () => {
    let filteredRecipes: RecipeDict[] = recipes;

    // Filter based on types
    if (filterValues.types.length != 0) {
      filteredRecipes = recipes.filter((recipe: RecipeDict) =>
        filterValues.types.includes(Meal[recipe.meal])
      ) as RecipeDict[];
    }

    // Filter based on restrictions
    if (filterValues.restrictions.length != 0) {
      filteredRecipes = filteredRecipes.filter((recipe: RecipeDict) =>
        filterValues.restrictions.includes(recipe.restriction)
      ) as RecipeDict[];
    }

    // Filter based on costs
    if (filterValues.costs.length != 0) {
      filteredRecipes = filteredRecipes.filter((recipe: RecipeDict) =>
        filterValues.costs.includes(Cost[recipe.cost])
      ) as RecipeDict[];
    }

    return filteredRecipes.map((recipe: RecipeDict) => (
      <Recipe
        to={recipe.to}
        name={recipe.name}
        title={recipe.title}
        meal={recipe.meal}
        cost={recipe.cost}
        restriction={recipe.restriction}
        difficulty={recipe.difficulty}
        length={recipe.length}
        imgSrc={recipe.imgSrc}
        imgAlt={recipe.imgAlt}
        infos={recipe.infos}
        ingredients={recipe.ingredients}
        steps={recipe.steps}
        sources={recipe.sources}
      />
    ));
  };

  return (
    <Container>
      <LeftSideDiv>
        <Filters isLast={true} onFilterChange={handleFilterChange} />
      </LeftSideDiv>
      <MainDiv isLast={true}>
        <CenteredH1>Recipes</CenteredH1>
        <RecipeList>{renderRecipes()}</RecipeList>
      </MainDiv>
    </Container>
  );
}

export default Recipes;
