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

const StyledUL = styled.ul`
  margin: 0 20px 0 20px;
`;

const StyledOL = styled.ol`
  margin: 0 20px 0 20px;
  padding-left: 0;
`;

type BaseRecipePageProps = {
  title: string;
  infos: Dict;
  ingredients: { [key: string]: string[] };
  steps: string[];
  sources: { [key: string]: string }[];
};

export function BaseRecipePage({
  title,
  infos,
  ingredients,
  steps,
  sources,
}: BaseRecipePageProps) {
  return (
    <Container>
      <BaseContentDiv>
        <CenteredH1>{title}</CenteredH1>
        <p style={{ textAlign: "center" }}>
          <strong>Recipe:</strong> {infos["prep"]}, <strong>Cooking:</strong>{" "}
          {infos["cooking"]}, <strong>Tools:</strong> {infos["tools"]}
        </p>
        <p style={{ textAlign: "center" }}>
          <strong>Serves:</strong> {infos["serves"]}
        </p>
        <Row>
          <LeftColumn>
            <LeftHeader>Ingredients</LeftHeader>
            {Object.entries(ingredients).map(([key, value]) => (
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
              {steps.map((step) => (
                <li>
                  <p>{step}</p>
                </li>
              ))}
            </StyledOL>
          </RightColumn>
        </Row>

        <CenteredH2>Sources</CenteredH2>
        <StyledUL style={{ marginBottom: "20px" }}>
          {sources.map((source) => (
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
