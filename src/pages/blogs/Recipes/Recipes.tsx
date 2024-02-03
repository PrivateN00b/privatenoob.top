import styled from "styled-components";
import BaseContentDiv from "../../../components/ui/BaseContentDiv";
import CenteredH1 from "../../../components/ui/CenteredH1";
import Container from "../../../components/ui/Container";
import { Recipe } from "./Recipe";
import MainDiv from "../../../components/ui/MainDiv";
import LeftSideDiv from "../../../components/ui/LeftSideDiv";
import Bio from "../../../layouts/sublayouts/Bio";
import Filters from "../../../layouts/sublayouts/Filters";

const RecipeList = styled.div`
  display: flex;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  padding-bottom: 40px;
  margin: 0 20px;

  @media (max-width: 900px) {
    flex-wrap: wrap;
  }
`;

function Recipes() {
  return (
    <Container>
      <LeftSideDiv>
        <Filters isLast={true} />
      </LeftSideDiv>
      <MainDiv isLast={true}>
        <CenteredH1>Recipes</CenteredH1>
        <RecipeList>
          <Recipe to="Bejgli" />
          <Recipe to="Bejgli" />
          <Recipe to="Bejgli" />
        </RecipeList>
      </MainDiv>
    </Container>
  );
}

export default Recipes;
