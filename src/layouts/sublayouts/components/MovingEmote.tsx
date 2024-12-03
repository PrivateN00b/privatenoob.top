import styled, { keyframes } from "styled-components"
import { EmoteProps, MovingEmoteProps } from "../../../utils/interfaces"
import Emote, { EmoteStyle } from "./Emote"

const MovingEmoteStyle = styled(EmoteStyle)<{ 
  $margin?: string, 
  $height?: number, 
  $width?: number, 
  $alignSelf: string, 
  $transX: number, 
  $transY: number, 
  $delay: number 
}>`
  image-rendering: pixelated;
  margin: ${({ $margin }) => $margin};
  height: ${({ $height }) => $height}px;
  width: ${({ $width }) => $width}px;
  align-self: ${({ $alignSelf }) => $alignSelf};
  cursor: pointer;
  
  position: relative;
  animation: ${({ $transX, $transY }) => keyframes`
    0% {
      left: 0;
      top: 0;
    }
    25% {
      left: ${$transX * 1}%;
      top: ${$transY * 1}%;
    }
    50% {
      left: ${-$transX * 1}%;
      top: ${-$transY * 1}%;
    }
    75% {
      left: ${$transX * 1}%;
      top: ${-$transY * 1}%;
    }
    100% {
      left: 0;
      top: 0;
    }
  `} 10s linear infinite;
  
  animation-delay: ${({ $delay }) => $delay}s;
  
  &:active {
    transform: scale(0.9);
  }
`;

export default function MovingEmote(props: MovingEmoteProps) {
    console.log(`MovingEmoteStyle transY: ${props.translateY}`)

    return <MovingEmoteStyle
        src={props.imgPath}
        $margin={props.margin}
        $height={props.height}
        $width={props.width}
        $alignSelf={props.alignSelf}
        $transX={props.translateX}
        $transY={props.translateY}
        $delay={props.delay}

        onClick={() => {
            // toggle()
        }} />
}