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
import { Dict } from "styled-components/dist/types";
import { Meal } from "../utils/RecipesEnums";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import recipesJSON from "../recipes.json";

const StyledUL = styled.ul`
  margin: 0 20px 0 20px;
`;

const StyledOL = styled.ol`
  margin: 0 20px 0 20px;
  padding-left: 0;
`;

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
  ingredients: { [key: string]: string[] };
  steps: string[];
  sources: { [key: string]: string }[]
}

export function BaseRecipePage() {
  const [recipe, setRecipe] = useState(() => {
    const location = useLocation();
    if (location.state != null) {
      return location.state as RecipeProps;
    }
    else {
      return recipesJSON[0] as RecipeProps;
    }
  })

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
            {Object.entries(recipe.ingredients).map(([key, value]) => (
              <>
                <SubHeader>{key.replace(/_/g, " ")}</SubHeader>
                {Object.entries(value).map((ingredient) => (
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
