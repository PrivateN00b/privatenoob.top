import styled from "styled-components";
import Bio from "../components/Bio";
import theme from "../styles/theme";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SideDiv = styled.div`
  border: solid ${({ theme }) => theme.colors.primary};
  width: 20%;
`;

const MainDiv = styled.div`
  border: solid ${({ theme }) => theme.colors.primary};
  width: 60%;
  margin: 0 10px 0 10px;
`;

const RightSideDiv = styled.div`
  border: solid ${({ theme }) => theme.colors.primary};
  width: 20%;
`;

function Home() {
  return (
    <Container>
      <SideDiv>
        <Bio />
      </SideDiv>
      <MainDiv>
        <h1>Home</h1>
      </MainDiv>
      <RightSideDiv>
        <h1>Home</h1>
      </RightSideDiv>
    </Container>
  );
}

export default Home;
