export default Page

import Container from "../../components/div/Container";
import LeftSideDiv from "../../components/div/LeftSideDiv";
import MainDiv from "../../components/div/MainDiv";
import { CenteredH1, CenteredH2 } from "../../components/text/CenteredHeaders";
import StyledItem from "../../components/text/StyledItem";
import StyledParagraph from "../../components/text/StyledParagraph";
import Bio from "../bio/Bio";
import Socials from "../socials/Socials";
import { BaseContentDiv } from "../../components/div/BaseContentDiv";
import SiteInfo from "../siteInfo/SiteInfo";
import { FlexDiv } from "../../components/div/FlexDivs";
import { lazy, Suspense } from "react";

const Buttons = lazy(() => import("./components/Buttons"))
const Webrings = lazy(() => import("../webringsAndFriends/Webrings"))
const WebFriends = lazy(() => import("../webringsAndFriends/WebFriends"))
const DeezerEmbed = lazy(() => import("../deezerEmbed/DeezerEmbed"))

function Page() {
  return (
      <Container>
        <meta name="description" content="Home page of privatenoob.top" />
        <meta name="keywords" content="home, main, Indieweb, Neocities, vaporwave, aesthetic, personal, Fediverse" />
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
              <BaseContentDiv $isLastBottom={true}>
                <CenteredH2>Webrings</CenteredH2>
                <Webrings />
                <CenteredH2>Friendos! :3</CenteredH2>
                <WebFriends />
              </BaseContentDiv>
              <DeezerEmbed $isLastBottom={true} />
            </FlexDiv>
          </Suspense>
        </MainDiv>
      </Container>
    );
}