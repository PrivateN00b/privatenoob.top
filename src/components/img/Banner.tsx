import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
  div: {
    overflow: "hidden",
    borderRadius: "20px 20px 0 0",
  },
  img: {
    display: "block",
    marginLeft: "50%",
    transform: "translateX(-50%)",
    height: "265px",
    width: "1520px"
  }
});

function Banner() {
  return (
    <div {...stylex.props(styles.div)}>
      <img {...stylex.props(styles.img)} 
        src="/banner.avif"
        alt="Banner image"
        rel="preload"
        fetchPriority="high"/>
    </div>
  );
}

export default Banner;
