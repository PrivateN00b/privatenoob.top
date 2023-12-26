import { Outlet } from "react-router-dom";
import Banner from "../components/ui/Banner";
import Navbar from "./sublayouts/Navbar";
import styled from "styled-components";

const Header = styled.header`
  background-color: ${({ theme }) => theme.colors.bg};
  border: double;
  margin-bottom: 20px;
  border-color: ${({ theme }) => theme.colors.primary};
  border-radius: 20px;
`;

const Main = styled.main`
  margin-bottom: 20px;
`;

const Footer = styled.footer`
  background-color: ${({ theme }) => theme.colors.bg};
  border: double;
  margin-bottom: 20px;
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
