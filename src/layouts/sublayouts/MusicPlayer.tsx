import BaseContentDiv from "../../components/ui/BaseContentDiv";
import { useEffect, useState } from "react";
import styled from "styled-components";

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

const PlayerImg = styled.img<{ $playing?: boolean }>`
  width: 200px;
  animation: spin 5s linear infinite;
  animation-play-state: ${({ $playing }) => ($playing ? "running" : "paused")};

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

// Adjust the WavyDiv styled-component
const WavyDiv = styled.div<{ $playing?: boolean }>`
  position: relative;

  span {
    letter-spacing: 5px;
    padding: 10px 0 5px 0;
    position: relative;
    display: inline-block; // Make sure the span elements are inline-block for the animation to work
    animation: wavy
      ${({ $playing }) => ($playing ? "1.3s ease-in-out infinite" : "none")};
    animation-delay: calc(0.1s * var(--i)); // Use the CSS variable for delay
  }

  @keyframes wavy {
    0%,
    100% {
      top: 0px;
    }
    50% {
      top: -15px;
    }
  }
`;

// Modify the MusicPlayer component
function MusicPlayer() {
  const [playing, toggle] = useAudio("/music/Jet Set Ratio.mp3");

  return (
    <BaseContentDiv
      style={{
        textAlign: "center",
        margin: "20px 0 0 0",
        padding: "10px 0 10px 0",
      }}
    >
      <PlayerImg
        style={{ width: "200px" }}
        src="/vecteezy_black-vinyl-disc-record-for-music-album-cover-design_9393830.png"
        alt="music disc"
        onClick={() => toggle()} // Add an onClick handler to the image
        $playing={playing}
      />
      <WavyDiv $playing={playing}>
        {/* Artist's name */}
        {Array.from("🧑 Een Glish 🎨").map((char, i) => (
          <>
            <span key={i} style={{ "--i": i + 1 } as React.CSSProperties}>
              {char}
            </span>
            {char == " " ? " " : ""}
          </>
        ))}
        <br />
        {/* Song name */}
        {Array.from("🎶 Jet Set Ratio 🎶").map((char, i) => (
          <>
            <span key={i} style={{ "--i": i + 1 } as React.CSSProperties}>
              {char}
            </span>
            {char == " " ? " " : ""}
          </>
        ))}
      </WavyDiv>
    </BaseContentDiv>
  );
}

export default MusicPlayer;

// Attribution: <a href="https://www.vecteezy.com/free-png/music-disc">Music Disc PNGs by Vecteezy</a>
