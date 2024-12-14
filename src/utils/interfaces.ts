import { MutableRefObject } from "react";

export interface BaseProps {
  isLast?: boolean;
}

export interface EmoteProps {
  ref?: ((instance: HTMLImageElement | null) => void) | React.RefObject<HTMLImageElement> | null | undefined;
  imgPath: string;
  margin?: string;
  height?: number | undefined;
  width?: number | undefined;
  alignSelf?: string
}

export interface MovingEmoteProps extends EmoteProps {
  top: number;
  left: number | null;
  delay: number;
  layoutRef: MutableRefObject<HTMLDivElement | null>;
  direction: number;
}
