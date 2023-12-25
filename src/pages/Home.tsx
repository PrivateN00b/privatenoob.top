import styled from "styled-components";
import Bio from "../components/Bio";
import theme from "../styles/theme";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BaseDiv = styled.div`
  border: double ${({ theme }) => theme.colors.primary};
  border-radius: 20px;
`;

const SideDiv = styled(BaseDiv)`
  width: 20%;
`;

const MainDiv = styled(BaseDiv)`
  width: 60%;
  margin: 0 20px 0 20px;
`;

const RightSideDiv = styled(BaseDiv)`
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
