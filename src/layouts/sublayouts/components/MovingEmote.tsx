import styled from "styled-components"
import { MovingEmoteProps } from "../../../utils/interfaces"
import { EmoteStyle } from "./Emote"
import { useEffect, useRef } from "react";

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
      let id: NodeJS.Timeout = setInterval(frame, 10);
      let msPassed: number = 0;
      let topPos = props.top;
      let leftPos = props.left;

      function frame() {
        msPassed += 10;
        if (msPassed >= 9000) {
          clearInterval(id);
        }
        else if (topPos <= 0 || leftPos <= 0) {
          clearInterval(id);
        } 
        else {
          topPos -= 2;
          leftPos -= 2;
          elem.style.top = `${topPos}px`;
          elem.style.left = `${leftPos}px`;
        }
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