import styled from "styled-components";

const BannerImg = styled.img`
  display: block;
  margin-left: 50%;
  transform: translateX(-50%);

  @media (max-width: 545px) {
    height: 200px;
  }
`;

function Banner() {
  return (
    <div
      style={{
        overflow: "hidden",
        borderRadius: "20px 20px 0 0",
        // border: "solid",
      }}
    >
      <BannerImg src="/banner-image-2.png" alt="Banner image" />
    </div>
  );
}

export default Banner;
