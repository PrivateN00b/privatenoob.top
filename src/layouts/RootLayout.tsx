import { Outlet } from "react-router-dom";
import Banner from "../components/ui/Banner";
import "./RootLayout.css";
import Navbar from "./sublayouts/Navbar";

export default function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        <Banner />
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
}
