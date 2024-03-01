import styled from "styled-components";
import CenteredH1 from "../../../components/ui/CenteredH1";
import Container from "../../../components/ui/Container";
import { Recipe } from "./Recipe";
import MainDiv from "../../../components/ui/MainDiv";
import LeftSideDiv from "../../../components/ui/LeftSideDiv";
import Filters from "../../../layouts/sublayouts/Filters";
import { useState } from "react";

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
  const [filterValues, setFilterValues] = useState({
    Breakfast: false,
    Dinner: false,
    Lunch: false,
    Dessert: false,
    Vegetarian: false,
    Vegan: false,
    Cheap: false,
    Reasonable: false,
    Expensive: false,
  });

  const handleFilterChange = (
    name: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFilterValues({
      ...filterValues,
      [name]: e.target.checked,
    });
  };

  return (
    <Container>
      <LeftSideDiv>
        <Filters isLast={true} onFilterChange={handleFilterChange} />
      </LeftSideDiv>
      <MainDiv isLast={true}>
        <CenteredH1>Recipes</CenteredH1>
        <RecipeList>
          <Recipe
            to="Bejgli"
            name="Cinnamon & Coconut rolls"
            cost={3}
            restriction="vegetarian"
            type="pastry"
            difficulty={2}
            length="4 hours"
            imgSrc="/dios-bejgli.jpg"
            imgAlt="Cinnamon rolls"
          />
          <Recipe
            to="ScrambledEggs"
            name="Scrambled eggs"
            type="breakfast"
            cost={1}
            restriction="vegetarian?"
            difficulty={1}
            length="10-15 min"
            imgSrc="/scrambled-eggs.jpg"
            imgAlt="Scrambled eggs"
          />
          <Recipe
            to="Bejgli"
            name="Cinnamon & Coconut rolls"
            type="pastry"
            cost={3}
            restriction="vegetarian"
            difficulty={2}
            length="4 hours"
            imgSrc="/dios-bejgli.jpg"
            imgAlt="Cinnamon rolls"
          />
        </RecipeList>
      </MainDiv>
    </Container>
  );
}

export default Recipes;
