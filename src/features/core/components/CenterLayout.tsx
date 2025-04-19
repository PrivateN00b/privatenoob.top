import Banner from "../../../components/img/Banner";
import Navbar from "./Navbar";
import * as stylex from '@stylexjs/stylex';
import { colors, colorsA, otherStyles } from "../../../styles/tokens.stylex";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const styles = stylex.create({
    layout: {
        width: "100%",
        maxWidth: otherStyles.contentMaxWidth,
        margin: "0 auto"
    },
    header: {
        backgroundColor: colorsA.bg,
        border: "double",
        margin: "20px 10px 20px 10px",
        borderColor: colors.primary,
        borderRadius: "20px",
        boxShadow: `5px 5px 10px 2px ${colorsA.primary}`  
    },
    main: {
        margin: "0 10px 20px 10px"
    }
})

export default function CenterLayout() {
    return <div {...stylex.props(styles.layout)}>
        <header {...stylex.props(styles.header)}>
            <Banner />
            <Navbar />
        </header>
        <main {...stylex.props(styles.main)}>
            <Outlet />
        </main>
        <Footer />
    </div>
}