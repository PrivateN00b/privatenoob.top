import { Outlet } from "react-router-dom";
import Banner from "../components/ui/Banner";
import Navbar from "./sublayouts/Navbar";
import styled from "styled-components";
import { rgba } from "polished";
import Footer from "./sublayouts/Footer";
import Emote from "./sublayouts/components/Emote";

const Header = styled.header`
  background-color: ${({ theme }) => rgba(theme.colors.bg, 0.9)};
  border: double;
  margin: 20px 10px 20px 10px;
  border-color: ${({ theme }) => theme.colors.primary};
  border-radius: 20px;
  box-shadow: 5px 5px 10px 2px ${({ theme }) => rgba(theme.colors.primary, 0.8)};
`;

const Main = styled.main`
  margin: 0 10px 20px 10px;
`;

const RootLayoutStyle = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -8px;
`

const LeftLayoutStyle = styled.div`
  display: flex;
  align-items: flex-end;
  width: 100%;

  @media (max-width: 1800px) {
    display: none
  }
`

const CenterLayoutStyle = styled.div`
  width: 100%;
  max-width: 1520px;
  margin: 0 auto;
`

const RightLayoutStyle = styled.div`
  position: relative;
  width: 100%;

  @media (max-width: 1800px) {
    display: none
  }
`

export default function RootLayout() {
  return (
    <RootLayoutStyle>
      <LeftLayoutStyle>
        <Emote 
          imgPath="/angel-tv.gif" 
          left="auto"
          bottom="20px"
          height={175}/>
      </LeftLayoutStyle>
      <CenterLayoutStyle>
        <Header>
          <Banner />
          <Navbar />
        </Header>
        <Main>
          <Outlet />
        </Main>
        <Footer />
      </CenterLayoutStyle>
      <RightLayoutStyle>
        <Emote />
      </RightLayoutStyle>
    </RootLayoutStyle>
  );
}
