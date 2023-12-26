function Banner() {
  return (
    <div
      style={{
        overflow: "hidden",
        borderRadius: "20px 20px 0 0",
        // border: "solid",
      }}
    >
      <img
        src="src/assets/banner-image-2.png"
        alt="Banner image"
        style={{
          display: "block", // Make the image take up the full width
          marginLeft: "50%",
          transform: "translateX(-50%)",
        }}
      />
    </div>
  );
}

export default Banner;
