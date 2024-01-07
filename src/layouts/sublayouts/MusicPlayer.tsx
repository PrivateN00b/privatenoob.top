import useSound from "use-sound";
import BaseContentDiv from "../../components/ui/BaseContentDiv";

import { useEffect, useState } from "react";
import styled from "styled-components";

const useAudio = (url: string) => {
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

const PlayerImg = styled.img<{ $playing?: boolean | (() => void) }>`
  width: 200px;
  animation: spin 5s linear infinite;
  animation-play-state: ${({ $playing }) =>
    $playing == true ? "running" : "paused"};

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

function MusicPlayer() {
  const [playing, toggle] = useAudio("/music/Jet Set Ratio.mp3");

  return (
    <BaseContentDiv
      style={{
        textAlign: "center",
        margin: "20px 0 20px 0",
      }}
    >
      <PlayerImg
        style={{ width: "200px" }}
        src="/vecteezy_black-vinyl-disc-record-for-music-album-cover-design_9393830.png"
        alt="music disc"
        onClick={() => toggle()} // Add an onClick handler to the image
        $playing={playing}
      />
    </BaseContentDiv>
  );
}

export default MusicPlayer;

// Attribution: <a href="https://www.vecteezy.com/free-png/music-disc">Music Disc PNGs by Vecteezy</a>
