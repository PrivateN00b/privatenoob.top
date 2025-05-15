import Container from "../../../components/div/Container";
import LeftSideDiv from "../../../components/div/LeftSideDiv";
import MainDiv from "../../../components/div/MainDiv";
import { CenteredH1 } from "../../../components/text/CenteredHeaders";
import StyledItem from "../../../components/text/StyledItem";
import StyledParagraph from "../../../components/text/StyledParagraph";
import Bio from "../../bio/Bio";
import Socials from "../../socials/Socials";
import BaseContentDiv from "../../../components/div/BaseContentDiv";
import SiteInfo from "../../siteInfo/SiteInfo";
import { FlexDiv } from "../../../components/div/FlexDivs";
import { lazy, Suspense } from "react";

const Buttons = lazy(() => import("./components/Buttons"))
const WebringsAndFriends = lazy(() => import("../../webringsAndFriends/WebringsAndFriends"))
const DeezerEmbed = lazy(() => import("../../deezerEmbed/DeezerEmbed"))

function Home() {
  return (
    <Container>
      <LeftSideDiv>
        <Bio />
        <SiteInfo />
        <Socials $isLastBottom={true} />
      </LeftSideDiv>
      <MainDiv>
        <BaseContentDiv>
          <CenteredH1>Introduction</CenteredH1>
          <StyledParagraph>
            Sup! This is your average personal website mostly, just as the other
            ones over at <a href="https://neocities.org/browse">Neocities</a> or <a href="https://nekoweb.org/">Nekoweb</a> to
            resurrect the{" "}
            <a href="https://youtu.be/00qwzmMrtok?si=PZJxoE06oZcuAMDP">
              Indie Web / Early Internet
            </a>{" "}
            atmosphere, except this site has been made via React (sorry noJS and
            static HTML chads, the temptation of the forbidden fruit was too great. )
          </StyledParagraph>

          <CenteredH1>What will the site offer?</CenteredH1>
          <StyledItem>Infos about the webmaster (me! ^_^)</StyledItem>
          <StyledItem>Blogs about recipes, tech and personal stuffs</StyledItem>
          <StyledItem>Links to webrings and other cool sites</StyledItem>
          <StyledItem>Guestbook!</StyledItem>
          <StyledItem>Quirky interactable elements</StyledItem>
          <StyledItem>Logging in for whatever reason</StyledItem>
          <StyledItem>Chatting feature?</StyledItem>
          <br />
        </BaseContentDiv>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Buttons />
        </Suspense>
        <Suspense fallback={<h1>Loading...</h1>}>
          <FlexDiv>
            <WebringsAndFriends $isLastBottom={true} />
            <DeezerEmbed $isLastBottom={true} $isLastLeft={true} />
          </FlexDiv>
        </Suspense>
      </MainDiv>
    </Container>
  );
}

export default Home;
