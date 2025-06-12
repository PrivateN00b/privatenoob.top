import { BaseContentDiv } from "../../components/div/BaseContentDiv"
import { CenteredH2 } from "../../components/text/CenteredHeaders";
import { BaseContentDivProps } from "../../utils/interfaces"
import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
  base: {
    border: "0",
    borderRadius: "3% 3% 5% 5%",
    marginBottom: "-5px"
  },
  /* For mobile view DeezerEmbed isn't in one line with Webrings and WebFriends
   and using the BaseContentDiv's marginLeft would make it look janky.
   
   SOLUTION: Just implement the marginLeft functionality separately */
  isLaftLeftHack: { 
    marginLeft: {
      default: "20px",
      ["@media (max-width: 420px)"]: "0px"
    }
  }
})

export default function DeezerEmbed({ $isLastBottom }: BaseContentDivProps) {
    return  <BaseContentDiv $isLastBottom={$isLastBottom} {...stylex.props(styles.isLaftLeftHack)}>
        <CenteredH2>🎶 Fav J-songs 🎶</CenteredH2>
        <iframe {...stylex.props(styles.base)}
                    title="deezer-widget" 
                    src="https://widget.deezer.com/widget/auto/playlist/13306681843" 
                    width="100%" 
                    height="400" 
                    allowTransparency={true}
                    allow="encrypted-media; clipboard-write"
                    loading="lazy"></iframe>
    </BaseContentDiv>
}