import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Meal } from "./utils/RecipesEnums";

const Card = styled(NavLink)`
  height: auto;
  max-width: 240px;
  text-decoration: none;
  margin: 10px 0;
  min-width: 180px;

  @media (max-width: 900px) {
    max-width: 250px;
  }
`;

const BaseCard = styled.div`
  background-color: ${({ theme }) => theme.colors.quarteriary};
  outline-style: outset;
  outline-color: ${({ theme }) => theme.colors.tertiary};
  color: ${({ theme }) => theme.colors.text1};
`;

const CardTop = styled(BaseCard)`
  width: inherit;
  border-radius: 20px 20px 0 0;
  margin-bottom: 15px;
  height: 77%;

  @media (max-width: 1100px) {
    height: 74%;
  }
`;

const CardBottom = styled(BaseCard)`
  display: block;
  padding: 5px 10px;
  border-radius: 0 0 10px 10px;
`;

const StatsRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2px 0;
`;

const Img = styled.img`
  aspect-ratio: 16 / 14;
  width: 100%;
  border-radius: inherit;
  object-fit: cover;
`;

const Infos = styled.div`
  padding: 5px 10px 1px 10px;
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

const RenderDifficulty = (difficulty: number) => {
  switch (difficulty) {
    case 1:
      return "🟩 🔳 🔳";
    case 2:
      return "🟧 🟧 🔳";
    case 3:
      return "🟥 🟥 🟥";
    default:
      return "🔳 🔳 🔳";
  }
};

const RenderCost = (cost: number) => {
  switch (cost) {
    case 1:
      return "💵 🔳 🔳";
    case 2:
      return "💵 💵 🔳";
    case 3:
      return "💵 💵 💵";
    default:
      return "🔳 🔳 🔳";
  }
};

const RenderRestriction = (restriction: string) => {
  switch (restriction) {
    case "vegetarian":
      return <span>🌱 🥛</span>;
    case "vegan":
      return <span>🌱</span>;
    case "vegetarian?":
      return <span>🌱 🥛 ❔</span>;
    case "vegan?":
      return <span>🌱 ❔</span>;
    default:
      return "";
  }
};

export function Recipe(props: RecipeProps) {
  return (
    <Card to={props.to} state={props}>
      <CardTop>
        <Img src={props.imgSrc} alt={props.imgAlt} />
        <Infos>
          <span style={{ fontWeight: "bold" }}>{Meal[props.meal]}</span>
          <h3>{props.name}</h3>
        </Infos>
      </CardTop>
      <CardBottom>
        <StatsRow>
          {RenderCost(props.cost)}
          {RenderRestriction(props.restriction)}
        </StatsRow>
        <StatsRow>
          {RenderDifficulty(props.difficulty)}
          <span>{props.length}</span>
        </StatsRow>
      </CardBottom>
    </Card>
  );
}
