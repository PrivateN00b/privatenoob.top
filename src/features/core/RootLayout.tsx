import * as stylex from '@stylexjs/stylex';
import LeftLayout from "./components/LeftLayout";
import RightLayout from "./components/RightLayout";
import CenterLayout from "./components/CenterLayout";

const styles = stylex.create({
  base: {
    position: "relative",
    display: "flex",
    justifyContent: "space-between",
    marginTop: "-8px",
  }
})



export default function RootLayout() {
  console.log("IN ROOTLAYOUT")

  return (
    <div {...stylex.props(styles.base)}>
      {/* <LeftLayout /> */}
      <CenterLayout />
      {/* <RightLayout /> */}
    </div>
  );
}
