import styled from "styled-components";
import BaseContentDiv from "../../../components/ui/BaseContentDiv";
import CenteredH1 from "../../../components/ui/CenteredH1";
import Container from "../../../components/ui/Container";
import { Recipe } from "./Recipe";

const RecipeList = styled.div`
  display: flex;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  padding-bottom: 40px;
  margin: 0 20px;

  @media (max-width: 900px) {
    flex-wrap: wrap;
  }
`

function Recipes() {
  return (
    <Container>
      <BaseContentDiv isLast={true}>
        <CenteredH1>Recipes</CenteredH1>
        <RecipeList>
          <Recipe to="Bejgli" />
          <Recipe to="Bejgli" />
          <Recipe to="Bejgli" />
        </RecipeList>
      </BaseContentDiv>
    </Container>
  );
}

export default Recipes;
