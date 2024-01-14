import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Card = styled(NavLink)`
  text-decoration: none;
`;

const BaseCard = styled.div`
  background-color: ${({ theme }) => theme.colors.quarteriary};
  outline-style: outset;
  outline-color: ${({ theme }) => theme.colors.tertiary};
  color: ${({ theme }) => theme.colors.text1};
`;

const CardTop = styled(BaseCard)`
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
  max-width: 300px;
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
        <Img
          src="https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fwww.mindmegette.hu%2Fimages%2F209%2FO%2Fdios-bejgli.jpg&sp=1705255621Tef230af04797bae9d213f74e9ebdfc8737f779758ec1b3927a373c0465a1d6b8"
          alt="Cinnamon rolls"
        />
        <Infos>
          <span>pastry</span>
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
