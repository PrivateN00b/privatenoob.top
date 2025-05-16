import Container from "../../../components/div/Container";
import LeftSideDiv from "../../../components/div/LeftSideDiv";
import MainDiv from "../../../components/div/MainDiv";
import Bio from "../../bio/Bio";
import SiteInfo from "../../siteInfo/SiteInfo";
import { FlexDiv } from "../../../components/div/FlexDivs";
import { lazy, Suspense } from "react";

// Lazy load components if the user is on mobile
let BaseContentDiv: any = {};
let Socials: any = {};
let CenteredH1: any = {};
let CenteredH2: any = {};
let StyledItem: any = {};
let StyledParagraph: any = {};
if (navigator.maxTouchPoints > 1) {
  BaseContentDiv = lazy(() => import("../../../components/div/BaseContentDiv"));
  Socials = lazy(() => import("../../socials/Socials"));
  CenteredH1 = lazy(() => import("../../../components/text/CenteredHeaders").then((module) => ({ default: module.CenteredH1 })));
  CenteredH2 = lazy(() => import("../../../components/text/CenteredHeaders").then((module) => ({ default: module.CenteredH2 })));
  StyledItem = lazy(() => import("../../../components/text/StyledItem"));
  StyledParagraph = lazy(() => import("../../../components/text/StyledParagraph"));
} else {
  BaseContentDiv = await import("../../../components/div/BaseContentDiv").then(module => module.default);
  Socials = await import("../../socials/Socials").then(module => module.default);
  CenteredH1 = await import("../../../components/text/CenteredHeaders").then(module => module.CenteredH1);
  CenteredH2 = await import("../../../components/text/CenteredHeaders").then(module => module.CenteredH2);
  StyledItem = await import("../../../components/text/StyledItem").then(module => module.default);
  StyledParagraph = await import("../../../components/text/StyledParagraph").then(module => module.default);
}

// Lazy load components
const Buttons = lazy(() => import("./components/Buttons"))
const Webrings = lazy(() => import("../../webringsAndFriends/Webrings"))
const WebFriends = lazy(() => import("../../webringsAndFriends/WebFriends"))
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
        <Suspense fallback={<h1>Loading...</h1>}>
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
        </Suspense>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Buttons />
        </Suspense>
        <Suspense fallback={<h1>Loading...</h1>}>
          <FlexDiv>
            <BaseContentDiv $isLastBottom={true}>
              <CenteredH2>Webrings</CenteredH2>
              <Webrings />
              <CenteredH2>Friendos! :3</CenteredH2>
              <WebFriends />
              <br />
            </BaseContentDiv>
            <DeezerEmbed $isLastBottom={true} $isLastLeft={true} />
          </FlexDiv>
        </Suspense>
      </MainDiv>
    </Container>
  );
}

export default Home;
