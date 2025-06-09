import { BaseContentDiv } from "../../components/div/BaseContentDiv"
import { CenteredH2 } from "../../components/text/CenteredHeaders";
import { BaseContentDivProps } from "../../utils/interfaces"
import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
  base: {
    border: "0",
    borderRadius: "3% 3% 5% 5%",
    marginBottom: "-5px"
  }
})

export default function DeezerEmbed({ $isLastBottom, $isLastLeft }: BaseContentDivProps) {
    return  <BaseContentDiv $isLastBottom={$isLastBottom} $isLastLeft={$isLastLeft}>
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