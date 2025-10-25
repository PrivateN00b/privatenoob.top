import { styled } from "styled-components"
import { useDispatch } from "react-redux";
import { useAudio } from "../../../hooks/useAudio";
import { changeActivation } from "../../../store/slices/movingEmoteSlice";
import { EmoteProps } from "../utils/interfaces";

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

export const VideoEmoteStyle = styled.video<{ $margin?: string, $height?: number, $width?: number, $alignSelf?: string }>`
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

    return <VideoEmoteStyle
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