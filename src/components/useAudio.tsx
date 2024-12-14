import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

/**
* A hook for playing audio. Features audio toggling and dispatching Redux events
* @param url Path to audio
* @param endedEvent Event to run when starting audio
* @returns Returns playing state, toggle and audio starting function
*/
export const useAudio = (url: string, endedEvent: () => { payload: any; type: string; }): [boolean, () => void, () => void] => {
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