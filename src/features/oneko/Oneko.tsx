import { useEffect, useRef, useState } from "react";
import { useMouseCoords } from "./useMouseCoords";
import styled from "styled-components";

const Sprite = styled.img<{ $top: number; $left: number }>`
  position: absolute;
  z-index: 1000;
  top: ${({ $top }) => $top}px;
  left: ${({ $left }) => $left}px;
  pointer-events: none;
  width: 32px;
  height: 32px;
`;

export default function Oneko() {
  const spriteRef = useRef<HTMLImageElement | null>(null);
  const coords = useMouseCoords();
  const [position, setPosition] = useState({
    top: window.innerHeight,
    left: 0.8 * window.innerWidth,
  });

  // The Sprite's position changes on each frame, going towards the current mouse position
  // The frame frequency matches the monitor's refresh rate (ex: function runs 60 times on a 60 Hz monitor)
  useEffect(() => {
    let animFrameId: number;

    function frame() {
      setPosition((currentPos) => {
        const speed = 1;
        const dx = coords.x - currentPos.left;
        const dy = coords.y - currentPos.top;
        const distance = Math.sqrt(dx * dx + dy * dy); // Distance between 2 objects.
        
        // Stop the sprite if it's close enough to the cursor
        if (Math.abs(dx) <= 4 && Math.abs(dy) <= 4) return currentPos;
        
        return {
          top: currentPos.top + speed * (dy / distance),
          left: currentPos.left + speed * (dx / distance),
        }
      });
      
      animFrameId = requestAnimationFrame(frame)
    }

    animFrameId = requestAnimationFrame(frame)


    return () => cancelAnimationFrame(animFrameId)
  }, [coords])


  return (
    <Sprite
      ref={spriteRef}
      src="/emoji/ok.png"
      $top={position.top}
      $left={position.left}
      alt="Following sprite"
    />
  );
}
