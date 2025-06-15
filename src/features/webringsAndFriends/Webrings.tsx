import { useEffect, useRef } from "react";
import { Arrow } from "../../components/img/Arrow";

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
        <Arrow href="https://fediring.net/previous?host=privatenoob.top"
            height={15} 
            riaLabel="Visit left-hand neighbouring website"
            direction="left" />
        <a href="https://fediring.net/">
          <img src="/infos/buttons/neo-fedi.gif" alt="Link to Fediring" width={88} height={31}/>
        </a>
        <Arrow href="https://fediring.net/next?host=privatenoob.top" 
            height={15} 
            riaLabel="Visit right-hand neighbouring website" 
            direction="right" />
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
