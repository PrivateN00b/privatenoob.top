import styled from "styled-components"
import { EmoteStyle } from "./Emote"
import { useEffect, useRef } from "react";
import { MovingEmoteProps } from "../utils/interfaces";

const MovingEmoteStyle = styled(EmoteStyle)<{
  $top: number;
  $left: number | null;
  $margin?: string,
  $height?: number,
  $width?: number,
  $delay: number
}>`
  position: absolute;
  image-rendering: pixelated;
  top: ${({ $top }) => $top}px;
  left: ${({ $left }) => $left}px;
  margin: ${({ $margin }) => $margin};
  height: ${({ $height }) => $height}px;
  width: ${({ $width }) => $width}px;
  cursor: pointer;

  &:active {
    transform: scale(0.9);
  }
`;

/**
* An interactable/clickable image component with moving animation. Uses Emote as base
*/
export default function MovingEmote(props: MovingEmoteProps) {
  const emoteRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (emoteRef.current && props.layoutRef.current && props.left != null) {
      let elem: HTMLImageElement = emoteRef.current;
      let id: NodeJS.Timeout = setTimeout(() => setInterval(frame, 10), Math.random() * 1000);
      let msPassed: number = 0;
      let topPos = props.top;
      let leftPos = props.left;
      let dirX = props.direction;
      let dirY = Math.cos(4 * Math.random() + Math.PI);
      let parentCont = props.layoutRef.current;

      function frame() {
        msPassed += 10;
        // Check if the emote hit an edge
        topPos <= 0 || topPos >= parentCont.clientHeight - elem.clientHeight ? dirY = -dirY : ""; // Y
        leftPos <= 0 || (msPassed >= 200 && leftPos >= parentCont.clientWidth - elem.clientWidth) ? dirX = -dirX : ""; // X

        // Do da movements
        topPos -= dirY * 4;
        leftPos -= dirX * 4;
        elem.style.top = `${topPos}px`;
        elem.style.left = `${leftPos}px`;
      }

      return () => {
        clearInterval(id);
      }
    }
  }, []);

  return (
    <MovingEmoteStyle
      ref={emoteRef}
      src={props.imgPath}
      $top={props.top}
      $left={props.left}
      $margin={props.margin}
      $height={props.height}
      $width={props.width}
      $delay={props.delay}
    />
  );
}