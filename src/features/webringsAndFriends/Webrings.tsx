import { useEffect, useRef } from "react";
import { Arrow } from "../../components/img/Arrow";

export default function Webrings() {
  const nixRingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!nixRingRef.current) return;

    // Load a selected script
    const loadScript = (src: string) => {
      return new Promise<void>((resolve, reject) => {
        const script = document.createElement("script");
        script.src = src;
        script.async = true;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error(`Script load error for ${src}`));
        document.body.appendChild(script);
      });
    };

    const scriptVariablesSrc = "https://teethinvitro.neocities.org/webring/linuxring/script/onionring-variables.js";
    const scriptWidgetSrc = "https://teethinvitro.neocities.org/webring/linuxring/script/onionring-widget.js";

    // Load the stylesheet
    const stylesheet = document.createElement("link");
    stylesheet.rel = "stylesheet";
    stylesheet.href = "https://teethinvitro.neocities.org/webring/linuxring/script/onionring.css";
    document.head.appendChild(stylesheet);
    
    // Load the scripts
    loadScript(scriptVariablesSrc)
      .then(() => loadScript(scriptWidgetSrc))
      .catch((error) => console.error(error));

    return () => {
      // Cleanup the *nixRing scripts
      document.body.querySelectorAll(`script[src="${scriptVariablesSrc}"], script[src="${scriptWidgetSrc}"]`).forEach((script) => {
        console.log(script);
      });
      document.head.removeChild(stylesheet);
    };
  }, []);

  return (
    <>
      {/* Fediring */}
      <p>
        <Arrow href="https://fediring.net/previous?host=privatenoob.top"
            height={15} 
            ariaLabel="Visit left-hand neighbouring website"
            direction="left" />
        <a href="https://fediring.net/">
          <img src="/infos/buttons/neo-fedi.gif" alt="Link to Fediring" width={88} height={31}/>
        </a>
        <Arrow href="https://fediring.net/next?host=privatenoob.top" 
            height={15} 
            ariaLabel="Visit right-hand neighbouring website" 
            direction="right" />
        {/* <RightTriangle href="https://fediring.net/next?host=privatenoob.top" ria-label="Visit right-hand neighbouring website" /> */}
      </p>
      {/* Silly City */}
      <iframe
        src="https://silly.city/embed.html?user=PrivateNoob"
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
