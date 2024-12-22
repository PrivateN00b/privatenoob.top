import { useEffect, useRef } from "react";
import { useMouseCoords } from "./useMouseCoords";
import styled from "styled-components";
import spriteSheet from "/oneko.png";

// This is how we can "index" the spritesheet
const spriteSets: SpriteSets = {
  idle: [[-3, -3]],
  alert: [[-7, -3]],
  scratchSelf: [
    [-5, 0],
    [-6, 0],
    [-7, 0],
  ],
  scratchWallN: [
    [0, 0],
    [0, -1],
  ],
  scratchWallS: [
    [-7, -1],
    [-6, -2],
  ],
  scratchWallE: [
    [-2, -2],
    [-2, -3],
  ],
  scratchWallW: [
    [-4, 0],
    [-4, -1],
  ],
  tired: [[-3, -2]],
  sleeping: [
    [-2, 0],
    [-2, -1],
  ],
  N: [
    [-1, -2],
    [-1, -3],
  ],
  NE: [
    [0, -2],
    [0, -3],
  ],
  E: [
    [-3, 0],
    [-3, -1],
  ],
  SE: [
    [-5, -1],
    [-5, -2],
  ],
  S: [
    [-6, -3],
    [-7, -2],
  ],
  SW: [
    [-5, -3],
    [-6, -1],
  ],
  W: [
    [-4, -2],
    [-4, -3],
  ],
  NW: [
    [-1, 0],
    [-1, -1],
  ],
};

const Sprite = styled.div<{ $top: number; $left: number }>`
  position: absolute;
  z-index: 1000;
  top: ${({ $top }) => $top}px;
  left: ${({ $left }) => $left}px;
  pointer-events: none;
  width: 32px;
  height: 32px;
`;

type SpriteSets = {
  [key: string]: number[][];
}

const setSprite = (img: HTMLImageElement, name: string, frame: number) => {
  const sprite: number[] = spriteSets[name][frame % spriteSets[name].length];
  img.style.backgroundImage = `url(${spriteSheet})`;
  img.style.backgroundPosition = `${sprite[0] * 32}px ${sprite[1] * 32}px`; // Show the appropiate sprite, by cutting the image
}

export default function Oneko() {
  const spriteRef = useRef<HTMLImageElement | null>(null);
  const animFrameId = useRef<number>()
  const coords = useMouseCoords();
  const positionRef = useRef({ // Starting idx of the Sprite, but it's initial position is separately defined
    top: window.innerHeight,
    left: 0.8 * window.innerWidth,
  });

  // The Sprite's position changes on each frame, going towards the current mouse position
  // The frame frequency matches the monitor's refresh rate (ex: function runs 60 times on a 60 Hz monitor)
  useEffect(() => {
    function frame() {
      const speed = 1;
      const dx = coords.x - positionRef.current.left;
      const dy = coords.y - positionRef.current.top;
      const distance = Math.sqrt(dx * dx + dy * dy); // Distance between 2 objects.
    
      // Selecting sprite based on direction
      if (spriteRef.current) {
        let direction = "";
        if (Math.abs(dy / distance) > 0.5) direction += dy > 0 ? "S" : "N";
        if (Math.abs(dx / distance) > 0.5) direction += dx > 0 ? "E" : "W";
        setSprite(spriteRef.current, direction, 0)
      } 

      // Stop the sprite if it's close enough to the cursor
      if (Math.abs(dx) <= 4 && Math.abs(dy) <= 4) return positionRef.current;
      
      // Update positions
      positionRef.current = {
        top: positionRef.current.top + speed * (dy / distance),
        left: positionRef.current.left + speed * (dx / distance),
      }
      if (spriteRef.current) {
        spriteRef.current.style.top = `${positionRef.current.top}px`
        spriteRef.current.style.left = `${positionRef.current.left}px`
      } 
      
      animFrameId.current = requestAnimationFrame(frame)
    }

    animFrameId.current = requestAnimationFrame(frame)

    // Cleanup
    return () => {
      if (animFrameId.current) {
        cancelAnimationFrame(animFrameId.current);
        animFrameId.current = undefined;
      }
    };
  }, [coords])

  return (
    <Sprite
      id="oneko"
      ref={spriteRef}
      $top={window.innerHeight}
      $left={0.8 * window.innerWidth}
    />
  );
}
