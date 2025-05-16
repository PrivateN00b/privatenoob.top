import * as stylex from '@stylexjs/stylex';
import CenterLayout from "./components/CenterLayout";
import { lazy } from 'react';

// Lazy load LeftLayout and RightLayout if the user is on mobile
let LeftLayout: any = {};
let RightLayout: any = {};
if (navigator.maxTouchPoints > 1) {
  LeftLayout = lazy(() => import("./components/LeftLayout"));
  RightLayout = lazy(() => import("./components/RightLayout"));
} else {
  LeftLayout = await import("./components/LeftLayout").then(module => module.default);
  RightLayout = await import("./components/RightLayout").then(module => module.default);
}

const styles = stylex.create({
  base: {
    position: "relative",
    display: "flex",
    justifyContent: "space-between",
    marginTop: "-8px",
  }
})

export default function RootLayout() {
  return (
    <div {...stylex.props(styles.base)}>
      <LeftLayout />
      <CenterLayout />
      <RightLayout />
    </div>
  );
}
