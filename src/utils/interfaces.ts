export interface BaseProps {
  isLast?: boolean;
}

export interface EmoteProps {
  imgPath: string;
  margin?: string;
  height?: number | undefined;
  width?: number | undefined;
  alignSelf: string
}

export interface MovingEmoteProps extends EmoteProps {
  translateX: number;
  translateY: number;
  delay: number;
}
