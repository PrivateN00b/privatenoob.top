import { useEffect, useState } from "react";
import styled from "styled-components"
import { EmoteProps } from "../../../utils/interfaces";

const useAudio = (url: string): [boolean, () => void] => {
    const [audio] = useState(new Audio(url));
    const [playing, setPlaying] = useState(false);
  
    const toggle = () => setPlaying(!playing);
  
    useEffect(() => {
      playing ? audio.play() : audio.pause();
    }, [playing]);
  
    useEffect(() => {
      audio.addEventListener("ended", () => setPlaying(false));
      return () => {
        audio.removeEventListener("ended", () => setPlaying(false));
      };
    }, []);
  
    return [playing, toggle];
  };

export const EmoteStyle = styled.img<{ $margin?: string, $height?: number, $width?: number, $alignSelf: string }>`
    image-rendering: pixelated;
    margin: ${({ $margin }) => $margin};
    height: ${({ $height }) => $height}px;
    width: ${({ $width }) => $width}px;
    align-self: ${({ $alignSelf }) => $alignSelf };
    cursor: pointer;

    &:active {
      transform: scale(0.9)
    }
`

export default function Emote(props: EmoteProps) {
    const [playing, toggle] = useAudio("/music/nso_stream.mp3");

    return <EmoteStyle 
        src={props.imgPath}
        $margin={props.margin}
        $height={props.height}
        $width={props.width}
        $alignSelf={props.alignSelf}
        onClick={() => {
            toggle()
        }} />
}