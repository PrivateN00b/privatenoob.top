import { PropsWithChildren } from "react";
import styled from "styled-components";

const IconStyle = styled.span`
  display: inline-flex;
  align-items: center;
  margin-bottom: 20px;

  img {
    height: ${({ theme }) => theme.fontSize.medium};
    padding-right: 5px;
  }
`;

function Icon(props: PropsWithChildren<{ src: string; text: string }>) {
  let imgOrEmoji = null;
  if (props.src.length > 2) {
    imgOrEmoji = <img src={props.src} />;
  } else {
    imgOrEmoji = props.src;
  }

  return (
    <IconStyle>
      {imgOrEmoji} {props.text}
    </IconStyle>
  );
}

export default Icon;
