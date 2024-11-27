import styled from "styled-components";
import BaseContentDiv from "../../../../components/ui/BaseContentDiv";
import CenteredH1 from "../../../../components/ui/CenteredH1";
import CenteredH2 from "../../../../components/ui/CenteredH2";
import Container from "../../../../components/ui/Container";
import {
  IngredientParagraph,
  LeftColumn,
  LeftHeader,
  RightColumn,
  RightHeader,
  Row,
  SubHeader,
} from "../components/RecipeColumns";
import { Meal } from "../utils/RecipesEnums";
import { useLocation, useParams } from "react-router-dom";
import { useEffect, useLayoutEffect, useMemo, useState } from "react";
import recipesJSON from "../recipes.json";

const StyledUL = styled.ul`
  margin: 0 20px 0 20px;
`;

const StyledOL = styled.ol`
  margin: 0 20px 0 20px;
  padding-left: 0;
`;

interface Ingredient {
  title: string,
  content: string[]
}

interface RecipeProps {
  to: string;
  name: string;
  title: string;
  meal: Meal;
  cost: number;
  restriction: string;
  difficulty: number;
  length: string;
  imgSrc: string;
  imgAlt: string;
  infos: { [key: string]: string };
  ingredients: Ingredient[];
  steps: string[];
  sources: { [key: string]: string }[]
}

export function BaseRecipePage() {
  const location = useLocation();
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState<RecipeProps | null>(null);

  // Set the location.state to recipe (when BaseRecipePage is called from Recipes)
  useEffect(() => {
    console.log(`state is: ${location.state}`)
    if (location.state) {
      // Get the recipe data if we have clicked the site from the Recipes page
      setRecipe(location.state as RecipeProps);
    }
    else {
      // Get the recipe data if we didn't click from the Recipes page (searching in local recipes.json)
      const recipeMatches = (recipesJSON as RecipeProps[]).filter(recipe => recipe.to == recipeId);
      if (recipeMatches.length >= 1) {
        setRecipe(recipeMatches[0]);
        console.log(recipeMatches)
        console.log(recipe)
      }
      else {
        // Get the recipe data if we didn't click from the Recipes page (searching on server's recipes.json)
        console.log(recipeId)
        fetch(`${import.meta.env.VITE_REACT_APP_SERVER_URL}/Recipes/${recipeId}`)
        .then((res) => res.json())
        .then((res) => {setRecipe(res as RecipeProps); console.log(res)});
      }
    }
  }, [location.state]);

  // Render a loading page till the recipe variable will be filled
  if (!recipe) {
    return <div>Loading recipe...</div>;
  }

  return (
    <Container>
      <BaseContentDiv>
        <CenteredH1>{recipe.title}</CenteredH1>
        <p style={{ textAlign: "center" }}>
          <strong>Recipe:</strong> {recipe.infos["prep"]}, <strong>Cooking:</strong>{" "}
          {recipe.infos["cooking"]}, <strong>Tools:</strong> {recipe.infos["tools"]}
        </p>
        <p style={{ textAlign: "center" }}>
          <strong>Serves:</strong> {recipe.infos["serves"]}
        </p>
        <Row>
          <LeftColumn>
            <LeftHeader>Ingredients</LeftHeader>
            {recipe.ingredients.map((ingObj) => (
              <>
                <SubHeader>{ingObj["title"]}</SubHeader>
                {ingObj["content"].map((ingredient) => (
                  <IngredientParagraph>{ingredient}</IngredientParagraph>
                ))}
              </>
            ))}
          </LeftColumn>
          <RightColumn>
            <RightHeader>Steps</RightHeader>
            <StyledOL>
              {recipe.steps.map((step) => (
                <li>
                  <p>{step}</p>
                </li>
              ))}
            </StyledOL>
          </RightColumn>
        </Row>

        <CenteredH2>Sources</CenteredH2>
        <StyledUL style={{ marginBottom: "20px" }}>
          {recipe.sources.map((source) => (
            <li>
              <a href={source["url"]}>{source["title"]}</a> Retrieved{" "}
              {source["retrieved"]}
            </li>
          ))}
        </StyledUL>
      </BaseContentDiv>
    </Container>
  );
}
