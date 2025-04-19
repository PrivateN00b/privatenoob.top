import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { GenerateEmotes } from "../../emote/components/GenerateEmotes";
import styled from "styled-components";

const RightLayoutStyle = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  width: 100%;

  @media (max-width: 1800px) {
    display: none
  }
`

export default function RightLayout() {
    const rightLayoutRef = useRef<HTMLDivElement | null>(null);
    const [layoutWidth, setLayoutWidth] = useState<number | null>(null);
    const areMovingEmotesActivated = useSelector((state: RootState) => state.movingEmote.isActive);
  
    // layoutWidth is used to spawn the MovingEmote objects in the X dimension
    useEffect(() => {
      if (rightLayoutRef.current) {
        setLayoutWidth(rightLayoutRef.current.clientWidth);
      }
    }, []);
  
    return <RightLayoutStyle ref={rightLayoutRef}>
          {areMovingEmotesActivated && GenerateEmotes(rightLayoutRef, layoutWidth)  /* Renders a bunch of emotes for animation if the NSO audio have been started */}
    </RightLayoutStyle>
  }