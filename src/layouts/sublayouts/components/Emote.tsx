import { useEffect, useState } from "react";
import styled from "styled-components"
import { EmoteProps } from "../../../utils/interfaces";
import { useDispatch } from "react-redux";
import { changeActivation } from "../../../utils/slices/movingEmoteSlice";

/**
* A hook for playing audio. Features audio toggling and dispatching Redux events
* @param url Path to audio
* @param endedEvent Event to run when starting audio
* @returns Returns playing state, toggle and audio starting function
*/
const useAudio = (url: string, endedEvent: () => { payload: any; type: string; }): [boolean, () => void, () => void] => {
    const [audio] = useState(new Audio(url));
    const [playing, setPlaying] = useState(false);
    const dispatch = useDispatch();
  
    const toggle = () => setPlaying(!playing);
    const start = () => setPlaying(true);
  
    useEffect(() => {
      playing ? audio.play() : audio.pause();
    }, [playing]);
  
    useEffect(() => {
      audio.addEventListener("ended", () => {
        setPlaying(false);
        dispatch(endedEvent());
      });
      return () => {
        audio.removeEventListener("ended", () => {
          setPlaying(false);
          dispatch(endedEvent());
        });
      };
    }, []);
  
    return [playing, toggle, start];
  };

export const EmoteStyle = styled.img<{ $margin?: string, $height?: number, $width?: number, $alignSelf?: string }>`
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

/**
* An interactable/clickable image component. Used as a base for MovingEmote
*/
export default function Emote(props: EmoteProps) {
  const [playing, _, start] = useAudio("/music/nso_stream.mp3", changeActivation);
  const dispatch = useDispatch();

    return <EmoteStyle
        src={props.imgPath}
        $margin={props.margin}
        $height={props.height}
        $width={props.width}
        $alignSelf={props.alignSelf}
        onClick={() => {
            if (!playing) {
              start();
              dispatch(changeActivation());
            }
        }} />
}