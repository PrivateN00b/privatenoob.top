import styled from "styled-components";
import theme from "../../styles/theme";

const BannerImg = styled.img`
  display: block;
  margin-left: 50%;
  transform: translateX(-50%);
`;

function Banner() {
  const maxWidth = theme.styles.contentMaxWidth;

  return (
    <div
      style={{
        overflow: "hidden",
        borderRadius: "20px 20px 0 0",
      }}
    >
      <BannerImg src="/banner-image-2.webp" alt="Banner image" width={maxWidth} height={265} rel="preconnect"/>
    </div>
  );
}

export default Banner;
