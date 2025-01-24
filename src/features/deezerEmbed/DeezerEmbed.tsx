import styled from "styled-components"
import BaseContentDiv from "../../components/div/BaseContentDiv"
import CenteredH2 from "../../components/text/CenteredH2"
import { BaseContentDivProps } from "../../utils/interfaces"

const DeezerIFrame = styled.iframe`
  border: 0;
  border-radius: 3% 3% 5% 5%;
  margin-bottom: -5px;
`

export default function DeezerEmbed({ $isLastBottom, $isLastLeft }: BaseContentDivProps) {
    return  <BaseContentDiv $isLastBottom={$isLastBottom} $isLastLeft={$isLastLeft}>
        <CenteredH2>🎶 Fav J-songs 🎶</CenteredH2>
        <DeezerIFrame title="deezer-widget" 
                    src="https://widget.deezer.com/widget/auto/playlist/13306681843" 
                    width="100%" 
                    height="400" 
                    allowTransparency={true}
                    allow="encrypted-media; clipboard-write"
                    rel="preconnect"></DeezerIFrame>
    </BaseContentDiv>
    
    
}