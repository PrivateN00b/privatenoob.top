import styled from "styled-components";
import Bio from "../layouts/sublayouts/Bio";
import BaseContentDiv from "../components/ui/BaseContentDiv";
import Socials from "../layouts/sublayouts/Socials";
import CenteredH1 from "../components/ui/CenteredH1";
import StyledParagraph from "../components/ui/StyledParagraph";
import ToDoItem from "../components/ui/ToDoItem";

// Encapsulating components

const Container = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 900px) {
    display: block;
  }

  h1 {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

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

const RightSideDiv = styled(BaseContentDiv)`
  width: 25%;
  max-height: 100%;
  height: 100%;

  @media (max-width: 900px) {
    width: 100%;
    margin: 20px 0 0 0;
  }
`;

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
          ones over at <a href="https://neocities.org/browse">Neocities</a>,
          except this site has been made via React (sorry noJS chads, I have
          failed you :( )
        </StyledParagraph>
        <br />
        <StyledParagraph>
          I plan to list my projects here, create my own webring, do some API
          calling to my homeserver to display some unnecessary stuffs, like my
          favorite games each year or something. Yes, I use SystemD, why do you
          ask? :3
        </StyledParagraph>
        <CenteredH1>To-do list</CenteredH1>
        <ToDoItem>Create the base layout</ToDoItem>
        <ToDoItem>Listing my projects in the Projects page</ToDoItem>
        <ToDoItem>Creating my webserver to do funny API calls</ToDoItem>
        <ToDoItem>Light and dark theme switcher</ToDoItem>
        <ToDoItem>Create webring</ToDoItem>
      </MainDiv>
    </Container>
  );
}

export default Home;
