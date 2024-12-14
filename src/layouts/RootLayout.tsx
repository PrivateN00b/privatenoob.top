import { Outlet } from "react-router-dom";
import Banner from "../components/ui/Banner";
import Navbar from "./sublayouts/Navbar";
import styled from "styled-components";
import { rgba } from "polished";
import Footer from "./sublayouts/Footer";
import Emote from "./sublayouts/components/Emote";
import MovingEmote from "./sublayouts/components/MovingEmote";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../utils/store";

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
  position: relative;
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
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (max-width: 1800px) {
    display: none
  }
`

const GenerateMovingEmotes = () => {
  
}

function RightLayout() {
  const rightLayoutRef = useRef<HTMLDivElement | null>(null);
  const [layoutWidth, setLayoutWidth] = useState<number | null>(null);
  const areMovingEmotesActivated = useSelector((state: RootState) => state.movingEmote.isActive);

  // Sets rightLayoutRef, which is used for not displaying the interactable emotes if the screen's width is too narrow
  useEffect(() => {
    if (rightLayoutRef.current) {
      setLayoutWidth(rightLayoutRef.current.clientWidth);
    }
  }, []);

  useEffect(() => {
    console.log(areMovingEmotesActivated)
  }, [areMovingEmotesActivated]);

  return <RightLayoutStyle ref={rightLayoutRef}>
        {areMovingEmotesActivated ?    /* Renders a bunch of emotes for animation if the NSO audio have been started */
        Array.from("012345".repeat(3)).map((value: string, index: number) => (
          <MovingEmote
            key={index}
            top={Math.floor(Math.random() * 1900)} // RightLayout's clientHeight: 1980
            left={layoutWidth} // RightLayout's clientWidth: 512
            imgPath="/saikouka.png"
            margin="50px 0 0 auto"
            delay={Math.floor(Math.random() * 3)}
            layoutRef={rightLayoutRef}
            />
        )) : <h2>FAAAAAAAASZ</h2>}
  </RightLayoutStyle>
}

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
      <RightLayout />
    </RootLayoutStyle>
  );
}
