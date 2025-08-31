import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";

/**
* A hook for playing audio. Features audio toggling and dispatching Redux events
* @param url Path to audio
* @param endedEvent Event to run when starting audio
* @returns Returns playing state, toggle and audio starting function
*/
export const useAudio = (url: string, endedEvent: () => { payload: any; type: string; }): [boolean, () => void, () => void] => {
    console.log("AUDIO URL: ", url)
    // Audio doesn't exist server side, since this is a client sided feature. Find some workaround please  
    const audio = useRef<HTMLAudioElement | undefined>(
      typeof Audio !== "undefined" ? new Audio(url) : undefined
    );
    console.log(audio)
    const [playing, setPlaying] = useState(false);
    const dispatch = useDispatch();
  
    const toggle = () => setPlaying(!playing);
    const start = () => setPlaying(true);
  
    useEffect(() => {
      playing ? audio.current?.play() : audio.current?.pause();
    }, [playing]);
  
    useEffect(() => {
      audio.current?.addEventListener("ended", () => {
        setPlaying(false);
        dispatch(endedEvent());
      });
      return () => {
        audio.current?.removeEventListener("ended", () => {
          setPlaying(false);
          dispatch(endedEvent());
        });
      };
    }, []);
  
    return [playing, toggle, start];
  };