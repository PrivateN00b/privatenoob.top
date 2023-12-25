function Banner() {
  return (
    <div
      style={{
        overflow: "hidden",
        border: "solid",
        marginBottom: "10px",
      }}
    >
      <img
        src="src/assets/banner-image.png"
        alt="Banner image"
        style={{
          display: "block", // Make the image take up the full width
        }}
      />
    </div>
  );
}

export default Banner;
