import { useEffect, useRef } from "react";
import * as stylex from '@stylexjs/stylex';
import { colors } from "../../styles/tokens.stylex";

const styles = stylex.create({
  fediArrowRight: {
    height: "0px",
    width: "0px",
    border: "15px solid",
    borderColor: `${colors.secondary} ${colors.secondary} transparent transparent`,
    transform: "rotate(45deg)"
  },
  fediArrowLeft: {
    height: "0px",
    width: "0px",
    border: "15px solid",
    borderColor: `transparent transparent ${colors.secondary} ${colors.secondary}`,
    transform: "rotate(45deg)"
  }
})

export default function Webrings() {
  const nixRingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (nixRingRef.current) {
        const stylesheet = document.createElement("link");
        stylesheet.rel = "stylesheet";
        stylesheet.href = "https://teethinvitro.neocities.org/webring/linuxring/script/onionring.css";
        document.head.appendChild(stylesheet);

        const scriptWidget = document.createElement("script");
        scriptWidget.src = "https://teethinvitro.neocities.org/webring/linuxring/script/onionring-widget.js";
        scriptWidget.async = true;
        document.body.appendChild(scriptWidget);

        const scriptVariables = document.createElement("script");
        scriptVariables.src = "https://teethinvitro.neocities.org/webring/linuxring/script/onionring-variables.js";
        scriptVariables.async = true;
        document.body.appendChild(scriptVariables);

      return () => {
        document.head.removeChild(stylesheet);
        document.body.removeChild(scriptWidget);
        document.body.removeChild(scriptVariables);
      };
    }
  }, [nixRingRef]);

  return (
    <>
      {/* Fediring */}
      <p>
        <a href="https://fediring.net/previous?host=privatenoob.top" ria-label="Visit left-hand neighbouring website">
          <img src="/menu-right.svg" {...stylex.props(styles.fediArrowLeft)}/>
        </a>
        <a href="https://fediring.net/">
          <img src="/infos/links/fediring.gif" alt="Link to Fediring"/>
        </a>
        <a href="https://fediring.net/next?host=privatenoob.top" ria-label="Visit right-hand neighbouring website">
          <img src="/menu-right.svg" {...stylex.props(styles.fediArrowRight)}/>
        </a>
        {/* <RightTriangle href="https://fediring.net/next?host=privatenoob.top" ria-label="Visit right-hand neighbouring website" /> */}
      </p>
      {/* Silly City */}
      <iframe
        src="https://silly.city/embed.html?user=your-username"
        title="silly.city webring"
        frameBorder="no"
        height={60}
        width={250}
      />
      {/* *nixRing */}
      <div id='linuxring' style={{ color: "black" }} ref={nixRingRef}></div>
      
    </>
  );
}
