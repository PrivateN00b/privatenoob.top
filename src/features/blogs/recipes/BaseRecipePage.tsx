import styled from "styled-components";
import BaseContentDiv from "../../../components/div/BaseContentDiv";
import CenteredH1 from "../../../components/text/CenteredH1";
import CenteredH2 from "../../../components/text/CenteredH2";
import Container from "../../../components/div/Container";
import {
  IngredientParagraph,
  LeftColumn,
  LeftHeader,
  RightColumn,
  RightHeader,
  Row,
  SubHeader,
} from "./components/RecipeColumns";
import { Meal } from "./utils/RecipesEnums";
import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import recipesJSON from "./utils/recipes.json";

const StyledUL = styled.ul`
  margin: 0 40px 0 40px;
`;

const StyledOL = styled.ol`
  margin: 0 40px 0 40px;
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

function RenderIngredients(props: RecipeProps ) {
  if (props.ingredients[0]["title"] == "") {
    // Render without SubHeader if the title is empty and there is only 1 object
    return <>
    {props.ingredients[0]["content"].map((ingredient) => (
      <IngredientParagraph>{ingredient}</IngredientParagraph>
    ))}
    </> 
  } 
  else
  {
    // Render everything (when title isn't empty basically)
    return props.ingredients.map((ingObj) => (
      <>
        <SubHeader>{ingObj["title"]}</SubHeader>
        {ingObj["content"].map((ingredient) => (
          <IngredientParagraph>{ingredient}</IngredientParagraph>
        ))}
      </>
    ))
  }
}

export function BaseRecipePage() {
  const location = useLocation();
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState<RecipeProps | null>(null);

  // Set the location.state to recipe (when BaseRecipePage is called from Recipes)
  useEffect(() => {
    if (location.state) {
      // Get the recipe data if we have clicked the site from the Recipes page
      setRecipe(location.state as RecipeProps);
    }
    else {
      // Get the recipe data if we didn't click from the Recipes page (searching in local recipes.json)
      const recipeMatches = (recipesJSON as RecipeProps[]).filter(recipe => recipe.to == recipeId);
      if (recipeMatches.length >= 1) {
        setRecipe(recipeMatches[0]);
      }
      else {
        // Get the recipe data if we didn't click from the Recipes page (searching on server's recipes.json)
        console.log(recipeId)
        fetch(`${import.meta.env.VITE_REACT_APP_SERVER_URL}/Recipes/${recipeId}`)
        .then((res) => res.json())
        .then((res) => {setRecipe(res as RecipeProps)});
      }
    }
  }, [location.state]);

  // Render a loading page till the recipe variable will be filled
  if (!recipe) {
    return <div>Loading recipe...</div>;
  }

  return (
    <Container>
      <BaseContentDiv isLastBottom={true}>
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
            {RenderIngredients(recipe)}
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
            source["url"] ?
            <li>
              <a href={source["url"]}>{source["title"]}</a> Retrieved{" "}
              {source["retrieved"]}
            </li> 
            :
            <li>
              <p>{source["title"]}</p>
            </li>
          ))}
        </StyledUL>
      </BaseContentDiv>
    </Container>
  );
}
