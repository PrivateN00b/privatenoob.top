import { useEffect, useState } from "react";
import styled from "styled-components"
import { EmoteProps } from "../../../utils/interfaces";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../utils/store";
import { changeActivation } from "../../../utils/slices/movingEmoteSlice";

const useAudio = (url: string, endedEvent: () => { payload: any; type: string; }): [boolean, () => void, () => void] => {
    const [audio] = useState(new Audio(url));
    const [playing, setPlaying] = useState(false);
    const dispatch = useDispatch();
    // const [playedPrev, setplayedPrev] = useState(false);
  
    const toggle = () => setPlaying(!playing);
    const start = () => setPlaying(true);
  
    useEffect(() => {
      playing ? audio.play() : audio.pause();
      // setplayedPrev(true);
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

export default function Emote(props: EmoteProps) {
  const [playing, toggle, start] = useAudio("/music/nso_stream.mp3", changeActivation);
  const areMovingEmotesActivated = useSelector((state: RootState) => state.movingEmote.isActive);
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