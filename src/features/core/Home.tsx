import Container from "../../components/div/Container";
import LeftSideDiv from "../../components/div/LeftSideDiv";
import MainDiv from "../../components/div/MainDiv";
import CenteredH1 from "../../components/text/CenteredH1";
import StyledItem from "../../components/text/StyledItem";
import StyledParagraph from "../../components/text/StyledParagraph";
import Bio from "../bio/Bio";
import DeezerEmbed from "../deezerEmbed/DeezerEmbed";
import Socials from "../socials/Socials";

function Home() {
  return (
    <Container>
      <LeftSideDiv>
        <Bio />
        <DeezerEmbed />
        <Socials isLast={true} />
        {/* <MusicPlayer /> */}
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
