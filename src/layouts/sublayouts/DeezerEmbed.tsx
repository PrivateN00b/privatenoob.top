import styled from "styled-components"
import BaseContentDiv from "../../components/ui/BaseContentDiv"
import CenteredH2 from "../../components/ui/CenteredH2"

const DeezerIFrame = styled.iframe`
  border: 0;
  border-radius: 3% 3% 5% 5%;
  margin-bottom: -5px;
`

export default function DeezerEmbed() {
    return  <BaseContentDiv>
        <CenteredH2>🎶 Fav J-songs 🎶</CenteredH2>
        <DeezerIFrame title="deezer-widget" 
                    src="https://widget.deezer.com/widget/auto/playlist/13306681843" 
                    width="100%" 
                    height="300" 
                    allowTransparency="true" 
                    allow="encrypted-media; clipboard-write"></DeezerIFrame>
    </BaseContentDiv>
    
    
}