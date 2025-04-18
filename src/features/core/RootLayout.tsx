import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import styled from "styled-components";
import { rgba } from "polished";
import Footer from "./components/Footer";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import Banner from "../../components/img/Banner";
import { RootState } from "../../store/store";
import Emote from "../emote/components/Emote";
import { GenerateEmotes } from "../emote/components/GenerateEmotes";

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
  justify-content: space-between;
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
  max-width: ${({ theme }) => theme.styles.contentMaxWidth};
  margin: 0 auto;
`

const RightLayoutStyle = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  width: 100%;

  @media (max-width: 1800px) {
    display: none
  }
`

function LeftLayout() {
  const leftLayoutRef = useRef<HTMLDivElement | null>(null);
  const areMovingEmotesActivated = useSelector((state: RootState) => state.movingEmote.isActive);

  return <LeftLayoutStyle ref={leftLayoutRef}>
        {areMovingEmotesActivated && GenerateEmotes(leftLayoutRef, 0) /* Renders a bunch of emotes for animation if the NSO audio have been started */}
        <Emote 
          imgPath="/angel-tv.webm" 
          margin="auto 20px 20px auto"
          height={175}
          alignSelf="flex-end"/>
  </LeftLayoutStyle>
}

function RightLayout() {
  const rightLayoutRef = useRef<HTMLDivElement | null>(null);
  const [layoutWidth, setLayoutWidth] = useState<number | null>(null);
  const areMovingEmotesActivated = useSelector((state: RootState) => state.movingEmote.isActive);

  // layoutWidth is used to spawn the MovingEmote objects in the X dimension
  useEffect(() => {
    if (rightLayoutRef.current) {
      setLayoutWidth(rightLayoutRef.current.clientWidth);
    }
  }, []);

  return <RightLayoutStyle ref={rightLayoutRef}>
        {areMovingEmotesActivated && GenerateEmotes(rightLayoutRef, layoutWidth)  /* Renders a bunch of emotes for animation if the NSO audio have been started */}
  </RightLayoutStyle>
}

export default function RootLayout() {
  return (
    <RootLayoutStyle>
      <LeftLayout />
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
