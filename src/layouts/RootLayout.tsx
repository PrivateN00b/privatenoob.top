import { Outlet } from "react-router-dom";
import Banner from "../components/ui/Banner";
import Navbar from "./sublayouts/Navbar";
import styled from "styled-components";
import { rgba } from "polished";
import Footer from "./sublayouts/Footer";
import Emote from "./sublayouts/components/Emote";
import MovingEmote from "./sublayouts/components/MovingEmote";

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
  display: flex;
  flex-direction: column;
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
          margin="auto 20px 20px auto"
          height={175}
          alignSelf="flex-end"/>
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
        {Array.from("012345".repeat(3)).map((value: string, index: number) => (
          <MovingEmote 
            key={index}
            imgPath="/saikouka.png"
            alignSelf="flex-start"
            margin="0 0 50px auto"
            translateX={100 + Math.floor(Math.random() * 10)}
            translateY={Math.floor(Math.random() * 150)}
            delay={Math.floor(Math.random() * 3)} 
            />
        ))}
      </RightLayoutStyle>
    </RootLayoutStyle>
  );
}
