import styled from "styled-components";
import Bio from "../layouts/sublayouts/Bio";
import BaseContentDiv from "../components/ui/BaseContentDiv";
import Socials from "../layouts/sublayouts/Socials";
import CenteredH1 from "../components/ui/CenteredH1";
import StyledParagraph from "../components/ui/StyledParagraph";
import StyledItem from "../components/ui/StyledItem";
import Container from "../components/ui/Container";

// Encapsulating components

const LeftSideDiv = styled.div`
  width: 30%;
  max-height: 100%;
  height: 100%;

  @media (max-width: 900px) {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    column-gap: 50px;
  }
`;

const MainDiv = styled(BaseContentDiv)`
  width: 70%;
  margin: 0 0 0 20px;

  @media (max-width: 900px) {
    width: 100%;
    margin: 20px 0 0 0;
  }
`;

// const RightSideDiv = styled(BaseContentDiv)`
//   width: 25%;
//   max-height: 100%;
//   height: 100%;

//   @media (max-width: 900px) {
//     width: 100%;
//     margin: 20px 0 0 0;
//   }
// `;

function Home() {
  return (
    <Container>
      <LeftSideDiv>
        <Bio />
        <Socials isLast={true} />
      </LeftSideDiv>
      <MainDiv>
        <CenteredH1>Introduction</CenteredH1>
        <StyledParagraph>
          Sup! This is your average personal website mostly, just as the other
          ones over at <a href="https://neocities.org/browse">Neocities</a> to
          resurrect the{" "}
          <a href="https://youtu.be/00qwzmMrtok?si=PZJxoE06oZcuAMDP">
            Indie Web / Early Internet
          </a>{" "}
          atmosphere, except this site has been made via React (sorry noJS and
          static HTML chads, I have failed you :( )
        </StyledParagraph>
        <br />
        <StyledParagraph>
          This site will host EVERYTHING I find informative, funny or just
          making unnecessary features, like login (I won't ever disturb you with
          it via popups, don't worry ^^) because it seems fun. Yes, I use
          Systemd, why do you ask? :3
        </StyledParagraph>

        <CenteredH1>What will this site offer?</CenteredH1>
        <StyledItem>List of my projects (yes it's a portfolio)</StyledItem>
        <StyledItem>Some personal blogs (check out the types)</StyledItem>
        <StyledItem>Links to webrings and other cool sites</StyledItem>
        <StyledItem>Guestbook!</StyledItem>
        <StyledItem>Other stuffs which resemble the Indie Web vibe</StyledItem>
        <StyledItem>Infos about me ^^</StyledItem>

        <CenteredH1>To-do list</CenteredH1>
        <ul>
          <li>
            Leftover pages: About, Projects, Blog posts, Links, Blinkies,
            Questbook
          </li>
          <li>Song selector</li>
          <li>Light and dark theme switcher</li>
          <li>THERE'S TOO MANY STUFFS TO DO AAAAAHHHH</li>
        </ul>
      </MainDiv>
    </Container>
  );
}

export default Home;
