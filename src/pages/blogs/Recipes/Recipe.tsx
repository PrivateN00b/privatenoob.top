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
`;

const CardBottom = styled(BaseCard)`
  display: flex;
  justify-content: space-between;
  padding: 5px 10px;
  border-radius: 0 0 10px 10px;
`;

const Img = styled.img`
  width: inherit;
  max-width: inherit;
  border-radius: inherit;
`;

const Infos = styled.div`
  padding: 5px 10px 1px 10px;
`;

interface RecipeProps {
  to: string;
}

export function Recipe({ to }: RecipeProps) {
  return (
    <Card to={to}>
      <CardTop>
        <Img src="/dios-bejgli.jpg" alt="Cinnamon rolls" />
        <Infos>
          <span style={{ fontWeight: "bold" }}>pastry</span>
          <h3>Cinnamon & Coconut rolls</h3>
        </Infos>
      </CardTop>
      <CardBottom>
        <span>🟧 🟧 🔳</span>
        <span>3-4 hours</span>
      </CardBottom>
    </Card>
  );
}
