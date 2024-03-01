import styled from "styled-components";
import CenteredH1 from "../../../components/ui/CenteredH1";
import Container from "../../../components/ui/Container";
import { Recipe } from "./Recipe";
import MainDiv from "../../../components/ui/MainDiv";
import LeftSideDiv from "../../../components/ui/LeftSideDiv";
import Filters from "../../../layouts/sublayouts/Filters";
import recipes from "./recipes.json";
import { useState } from "react";
import { FilterDict, RecipeDict } from "./utils/RecipesTypes";
import { Cost } from "./utils/RecipesEnums";

const RecipeList = styled.div`
  display: flex;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  padding-bottom: 40px;
  margin: 0 20px;

  @media (max-width: 1000px) {
    flex-wrap: wrap;
  }
`;

function Recipes() {
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
    let filteredRecipes: RecipeDict[] = JSON.parse(
      JSON.stringify(recipes)
    ) as RecipeDict[];

    // Filter based on types
    if (filterValues.types.length != 0) {
      filteredRecipes = recipes.filter((recipe: RecipeDict) =>
        filterValues.types.includes(recipe.type)
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
        type={recipe.type}
        cost={recipe.cost}
        restriction={recipe.restriction}
        difficulty={recipe.difficulty}
        length={recipe.length}
        imgSrc={recipe.imgSrc}
        imgAlt={recipe.imgAlt}
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
