import useSound from 'use-sound';
import BaseContentDiv from '../../components/ui/BaseContentDiv';

import {useEffect, useState} from "react";

const useAudio = (url: string) => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
      playing ? audio.play() : audio.pause();
    },
    [playing]
  );

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

function MusicPlayer() {
  const [playing, toggle] = useAudio('/music/Jet Set Ratio.mp3');

  return (
    <BaseContentDiv style={{ alignItems: "center", textAlign: "center" }}>
      <img 
        style={{ width: "200px" }} 
        src="/vecteezy_black-vinyl-disc-record-for-music-album-cover-design_9393830.png" 
        alt="music disc"
        onClick={() => toggle()} // Add an onClick handler to the image
      />
    </BaseContentDiv>
  )
}

export default MusicPlayer;

// Attribution: <a href="https://www.vecteezy.com/free-png/music-disc">Music Disc PNGs by Vecteezy</a>