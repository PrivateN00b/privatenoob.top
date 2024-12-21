import { useEffect, useState } from "react";

export const useMouseCoords = () => {
    const [coords, setCoords] = useState({x: 0, y: 0});

    useEffect(() => {
      const handleWindowMouseMove = (event: any) => {
        setCoords({
          x: event.clientX,
          y: event.clientY,
        });
      };
      window.addEventListener('mousemove', handleWindowMouseMove);
  
      return () => {
        window.removeEventListener('mousemove', handleWindowMouseMove);
      };
    }, []);
  
    return coords;
}