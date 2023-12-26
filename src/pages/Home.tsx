import styled from "styled-components";
import Bio from "../components/Bio";
import theme from "../styles/theme";

// Encapsulating components

const Container = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 900px) {
    display: block;
  }
`;

const BaseDiv = styled.div`
  background-color: ${({ theme }) => theme.colors.bg};
  border: double ${({ theme }) => theme.colors.primary};
  border-radius: 20px;
`;

const SideDiv = styled(BaseDiv)`
  width: 20%;

  @media (max-width: 900px) {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    column-gap: 50px;
  }
`;

const MainDiv = styled(BaseDiv)`
  width: 60%;
  margin: 0 20px 0 20px;

  @media (max-width: 900px) {
    width: 100%;
    margin: 20px 0 0 0;
  }
`;

const RightSideDiv = styled(BaseDiv)`
  width: 20%;

  @media (max-width: 900px) {
    width: 100%;
    margin: 20px 0 0 0;
  }
`;

// Other attributes

const CenteredH1 = styled.h1`
  text-align: center;
`;

const StyledParagraph = styled.p`
  margin: 0 20px 0 20px;
`;

const ToDoItem = styled.h3`
  text-align: center;
  background-color: ${({ theme }) => theme.colors.tertiary};
  border-radius: 20px;
  margin: 0 200px 20px 200px;
  padding: 10px 0 10px 0;
`;

function Home() {
  return (
    <Container>
      <SideDiv>
        <Bio />
      </SideDiv>
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
      <RightSideDiv>
        <h1>Home</h1>
      </RightSideDiv>
    </Container>
  );
}

export default Home;
