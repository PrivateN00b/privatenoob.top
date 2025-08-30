import Banner from "../../../components/img/Banner";
import Navbar from "./Navbar";
import * as stylex from '@stylexjs/stylex';
import { colors, colorsA, otherStyles } from "../../../styles/tokens.stylex";
import { Outlet } from "react-router-dom";
import { lazy, Suspense } from "react";

const Footer = lazy(() => import("./Footer"))

const styles = stylex.create({
    layout: {
        width: "100%",
        maxWidth: otherStyles.contentMaxWidth,
    },
    header: {
        backgroundColor: colorsA.bg,
        border: "double",
        margin: {
            default: "20px 10px 20px 10px",
            ["@media (max-width: 420px)"]: "10px 0 10px 0"
        },
        borderColor: colors.primary,
        borderRadius: "20px",
        boxShadow: `5px 5px 10px 2px ${colorsA.primary}`  
    },
    main: {
        margin: {
            default: "0 10px 20px 10px",
            ["@media (max-width: 420px)"]: "10px 0 10px 0"
        }
    }
})

export default function CenterLayout() {
    return <div {...stylex.props(styles.layout)}>
        <header {...stylex.props(styles.header)}>
            {/* <Banner /> */}
            {/* <Navbar /> */}
        </header>
        <main {...stylex.props(styles.main)}>
            <Outlet />
        </main>
        <Suspense fallback={<h1>Loading...</h1>}>
            {/* <Footer /> */}
        </Suspense>
    </div>
}