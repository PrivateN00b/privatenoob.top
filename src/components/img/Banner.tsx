import theme from "../../styles/theme";
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
  }
});

function Banner() {
  const maxWidth = theme.styles.contentMaxWidth;

  return (
    <div {...stylex.props(styles.div)}>
      <img {...stylex.props(styles.img)} src="/banner-image-2.webp" alt="Banner image" width={maxWidth} height={265} rel="preload" fetchPriority="high"/>
    </div>
  );
}

export default Banner;
