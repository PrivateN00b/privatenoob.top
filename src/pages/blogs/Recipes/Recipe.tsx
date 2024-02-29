import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Card = styled(NavLink)`
  width: 100%;
  height: auto;
  max-width: 320px;
  text-decoration: none;
  margin: 10px;

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
  height: 340px;
`;

const CardBottom = styled(BaseCard)`
  display: flex;
  justify-content: space-between;
  padding: 5px 10px;
  border-radius: 0 0 10px 10px;
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
  type: string;
  difficulty: number;
  length: string;
  imgSrc: string;
  imgAlt: string;
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

export function Recipe(props: RecipeProps) {
  return (
    <Card to={props.to}>
      <CardTop>
        <Img src={props.imgSrc} alt={props.imgAlt} />
        <Infos>
          <span style={{ fontWeight: "bold" }}>{props.type}</span>
          <h3>{props.name}</h3>
        </Infos>
      </CardTop>
      <CardBottom>
        {RenderDifficulty(props.difficulty)}
        <span>{props.length}</span>
      </CardBottom>
    </Card>
  );
}
