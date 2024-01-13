import { Outlet } from "react-router-dom";
import Banner from "../components/ui/Banner";
import Navbar from "./sublayouts/Navbar";
import styled from "styled-components";
import { rgba } from "polished";
import Footer from "./sublayouts/Footer";

const Header = styled.header`
  background-color: ${({ theme }) => rgba(theme.colors.bg, 0.9)};
  border: double;
  margin: 20px 10px 20px 10px;
  border-color: ${({ theme }) => theme.colors.primary};
  border-radius: 20px;
  box-shadow: 5px 5px 10px 2px ${({ theme }) => rgba(theme.colors.primary, 0.8)};
`;

const Main = styled.main`
  margin-bottom: 20px;
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
      <Footer />
    </div>
  );
}
