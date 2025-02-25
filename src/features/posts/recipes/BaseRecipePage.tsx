import styled from "styled-components";
import BaseContentDiv from "../../../components/div/BaseContentDiv";
import CenteredH1 from "../../../components/text/CenteredH1";
import CenteredH2 from "../../../components/text/CenteredH2";
import Container from "../../../components/div/Container";
import {
  IngredientDiv,
  IngredientParagraph,
  IngredientsColumn,
  Square,
  StepsColumn,
  SubHeader,
} from "./components/RecipeColumns";
import { Meal } from "./utils/RecipesEnums";
import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import recipesJSON from "./utils/recipes.json";
import PortionAdjuster from "./components/PortionAdjuster";

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

function RenderIngredients(props: RecipeProps, portion: number) {

  const renderIngredient = (key: number, ingredient: string) => {
    let ingSplit: string[] = ingredient.split(' ')  // Split the sentence to extract the portion

    // Check if the first word is (optional), and if yes then it shall be added to the sentence later on
    let optional: string = "";
    if (ingSplit[0] === "(optional)") {
      optional = ingSplit[0]
      ingSplit = ingSplit.splice(1, ingSplit.length)
      ingredient = ingredient.replace("(optional)", "")
    }

    if (ingSplit[0].includes('-')) {  // There are some instances where the portions are shown in ranges. Ex: "20-30 dl"
      const portionSplit: string[] = ingSplit[0].split('-')  
      return <IngredientParagraph key={key}>
        {optional} {portion * Number.parseFloat(portionSplit[0])}-{portion * Number.parseFloat(portionSplit[1])} {ingredient.substring(ingSplit[0].length + 1,ingredient.length)}
      </IngredientParagraph>       
    } 
    else if (Number.isInteger(Number.parseFloat(ingSplit[0]))){  // If the first word is just a number. Ex: "3 eggs" => 3 is the first word
      return <IngredientParagraph key={key}>
        {optional} {portion * Number.parseFloat(ingSplit[0])} {ingredient.substring(ingSplit[0].length + 1,ingredient.length)}
      </IngredientParagraph>
    }
    else {  // If the first word isn't a number. Ex: "Black pepper"
      return <IngredientParagraph key={key}>
        {optional} {ingredient}
      </IngredientParagraph>
    }
  }

  if (props.ingredients[0]["title"] == "") {
    // Render without SubHeader if the title is empty and there is only 1 object
    // Key can be index, because this page is read-only
    return (
      <>
        {props.ingredients[0]["content"].map((ingredient, i) => (
          <IngredientDiv key={i} className="empty-title">
            {renderIngredient(i, ingredient)}
            <Square />
          </IngredientDiv>
        ))}
      </>
    );
  } 
  else
  {
    // Render everything (when title isn't empty basically)
    // Key can be index, because this page is read-only
    return props.ingredients.map((ingObj, i) => (
      <>
        <SubHeader key={i}>{ingObj["title"]}</SubHeader>
        {ingObj["content"].map((ingredient, j) => (
            <IngredientDiv>
              {renderIngredient(j, ingredient)}
              <Square />
            </IngredientDiv>
        ))}
      </>
    ))
  }
}

export function BaseRecipePage() {
  const location = useLocation();
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState<RecipeProps | null>(null);
  const [portion, setPortion] = useState(2.0)

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
      <BaseContentDiv $isLastBottom={true}>
        <CenteredH1>{recipe.title}</CenteredH1>
        <p style={{ textAlign: "center" }}>
          <strong>Recipe:</strong> {recipe.infos["prep"]}, <strong>Cooking:</strong>{" "}
          {recipe.infos["cooking"]}, <strong>Tools:</strong> {recipe.infos["tools"]}
        </p>
        <p style={{ textAlign: "center" }}>
          <strong>Serves:</strong> {recipe.infos["serves"]}
        </p>

        <IngredientsColumn>
          <CenteredH2>Ingredients</CenteredH2>
          <PortionAdjuster portion={portion} setPortion={setPortion}/>
          <br />
          {RenderIngredients(recipe, portion)}
        </IngredientsColumn>

        <StepsColumn>
          <CenteredH2>Steps</CenteredH2>
          <StyledOL>
            {recipe.steps.map((step) => (
              <li style={{ textAlign: "left" }}>
                <p>{step}</p>
              </li>
            ))}
          </StyledOL>
        </StepsColumn>

        <CenteredH2>Sources</CenteredH2>
        <StyledUL style={{ marginBottom: "20px" }}>
          {recipe.sources.map((source) => (
            source["url"] ?
            <li style={{ textAlign: "left" }}>
              <a href={source["url"]}>{source["title"]}</a> Retrieved{" "}
              {source["retrieved"]}
            </li> 
            :
            <li style={{ textAlign: "left" }}>
              <p>{source["title"]}</p>
            </li>
          ))}
        </StyledUL>
      </BaseContentDiv>
    </Container>
  );
}
