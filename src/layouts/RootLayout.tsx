import { Outlet } from "react-router-dom";
import Banner from "../components/ui/Banner";
import Navbar from "./sublayouts/Navbar";
import styled from "styled-components";

const Header = styled.header`
  border: solid;
  margin-bottom: 10px;
  border-color: ${({ theme }) => theme.colors.primary};
`;

const Main = styled.main`
  margin-bottom: 10px;
`;

const Footer = styled.footer`
  border: solid;
  margin-bottom: 10px;
  border-color: ${({ theme }) => theme.colors.primary};
`;

export default function RootLayout() {
  return (
    <div>
      <Header>
        <Banner />
        <Navbar />
      </Header>
      <Main>
        <Outlet />
      </Main>
      <Footer></Footer>
    </div>
  );
}
