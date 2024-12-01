import { useEffect, useState } from "react";
import styled from "styled-components"

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

const EmoteStyle = styled.img<{ $left?: string, $bottom?: string, $height?: number, $width?: number }>`
    image-rendering: pixelated;
    margin-left: ${({ $left }) => $left};
    margin-bottom: ${({ $bottom }) => $bottom};
    height: ${({ $height }) => $height}px;
    width: ${({ $width }) => $width}px;
    cursor: pointer;

    &:active {
        transform: scale(0.9)
    }
`
interface EmoteProps {
    imgPath: string;
    left?: string;
    bottom?: string;
    height?: number | undefined;
    width?: number | undefined;
}

export default function Emote(props: EmoteProps) {
    const [playing, toggle] = useAudio("/music/nso_stream.mp3");

    return <EmoteStyle 
        src={props.imgPath}
        $left={props.left}
        $bottom={props.bottom}
        $height={props.height}
        $width={props.width}
        onClick={() => {
            toggle()
        }} />
}