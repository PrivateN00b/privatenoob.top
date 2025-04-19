import { useRef } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { GenerateEmotes } from "../../emote/components/GenerateEmotes";
import Emote from "../../emote/components/Emote";
import * as stylex from '@stylexjs/stylex';

const NON_DESKTOP = "@media (max-width: 1800px)"

const styles = stylex.create({
  base: {
    width: "100%",
    display: {
      default: "flex",
      [NON_DESKTOP]: "none"
    }
  }
})

export default function LeftLayout() {
    const leftLayoutRef = useRef<HTMLDivElement | null>(null);
    const areMovingEmotesActivated = useSelector((state: RootState) => state.movingEmote.isActive);
  
    return <div {...stylex.props(styles.base)} ref={leftLayoutRef}>
          {areMovingEmotesActivated && GenerateEmotes(leftLayoutRef, 0) /* Renders a bunch of emotes for animation if the NSO audio have been started */}
          <Emote 
            imgPath="/angel-tv.webm" 
            margin="auto 20px 20px auto"
            height={175}
            alignSelf="flex-end"/>
    </div>
  }