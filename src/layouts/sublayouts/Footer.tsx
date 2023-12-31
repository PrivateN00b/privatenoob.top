import { rgba } from "polished";
import styled from "styled-components";
import CenteredH2 from "../../components/ui/CenteredH2";
import { Link } from "react-router-dom";

const FooterStyle = styled.footer`
  background-color: ${({ theme }) => rgba(theme.colors.bg, 0.9)};
  border: double;
  margin-bottom: 20px;
  border-color: ${({ theme }) => theme.colors.primary};
  border-radius: 20px;
  box-shadow: 5px 5px 10px 2px ${({ theme }) => rgba(theme.colors.primary, 0.8)};
  display: flex;
  text-align: center;
  justify-content: space-between;

  a:link {
    color: ${({ theme }) => theme.colors.link};
  }

  a:visited {
    color: ${({ theme }) => theme.colors.linkVisited};
  }
`;

const StyledLink = styled(Link)`
  padding-bottom: 10px;
`;

const LinkDiv = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1300px) {
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

function Footer() {
  return (
    <FooterStyle>
      <div style={{ width: "30%" }}>
        <CenteredH2>Infos</CenteredH2>
        <p>Last Update: 2023.11.30</p>
        <p>Total Views: UNDER CONSTRUCTION </p>
      </div>
      <div style={{ width: "40%" }}>
        <CenteredH2>Boring stuff</CenteredH2>
        <p>© PrivateNoob 2023-2024. Do whatever the hell you want with it.</p>
      </div>
      <div style={{ width: "30%", display: "flex", flexDirection: "column" }}>
        <CenteredH2>Links</CenteredH2>
        <LinkDiv>
          <StyledLink to="404">Sitemap</StyledLink>
          <StyledLink to="404">Accessibility</StyledLink>
          <StyledLink to="404">Credits</StyledLink>
          <StyledLink to="404">Back to Top</StyledLink>
        </LinkDiv>
      </div>
    </FooterStyle>
  );
}

export default Footer;
