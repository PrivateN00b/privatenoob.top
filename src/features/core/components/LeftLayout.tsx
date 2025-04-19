import { useRef } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../../store/store";
import { GenerateEmotes } from "../../emote/components/GenerateEmotes";
import Emote from "../../emote/components/Emote";

const LeftLayoutStyle = styled.div`
  display: flex;
  width: 100%;

  @media (max-width: 1800px) {
    display: none
  }
`

export default function LeftLayout() {
    const leftLayoutRef = useRef<HTMLDivElement | null>(null);
    const areMovingEmotesActivated = useSelector((state: RootState) => state.movingEmote.isActive);
  
    return <LeftLayoutStyle ref={leftLayoutRef}>
          {areMovingEmotesActivated && GenerateEmotes(leftLayoutRef, 0) /* Renders a bunch of emotes for animation if the NSO audio have been started */}
          <Emote 
            imgPath="/angel-tv.webm" 
            margin="auto 20px 20px auto"
            height={175}
            alignSelf="flex-end"/>
    </LeftLayoutStyle>
  }