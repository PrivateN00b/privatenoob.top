import { MutableRefObject } from "react"
import MovingEmote from "./MovingEmote"

export const GenerateEmotes = (layoutRef: MutableRefObject<HTMLDivElement | null>, layoutWidth: number | null) => {
  const emoteNames: { [index: number]: string } = {
    0: "bujishibou",
    1: "gomen",
    2: "love",
    3: "ok",
    4: "pien",
    5: "saikouka",
    6: "sorena",
    7: "waritodoudemoii"
  }  
  
  return Array.from("ABCDEFGHIJKLabcdefghijkl").map((key: string) => (
    <MovingEmote
      key={key}
      top={Math.floor(Math.random() * 1900)} // Spawn somewhere in Y dimension
      left={layoutWidth} // Spawn somewhere in X dimension
      imgPath={`/emoji/${emoteNames[Math.floor(Math.random() * 7)]}.png`}
      delay={Math.floor(Math.random())}
      layoutRef={layoutRef}
      direction={1}
      />
  ))
}