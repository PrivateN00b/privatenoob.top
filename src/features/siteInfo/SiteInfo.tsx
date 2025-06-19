import styled from "styled-components";
import { BaseContentDiv } from "../../components/div/BaseContentDiv";
import { BaseContentDivProps } from "../../utils/interfaces";
import { FlexDivWithPadding } from "../../components/div/FlexDivs";
import WebsiteCarbonBadge from "./WebsiteCarbonBadge/WebsiteCarbonBadge";

const SiteInfoStyle = styled(BaseContentDiv)`
    padding-top: 20px;
`;

const ClickableImg = styled.img`
    width: 145px;
    height: 98px;
    aspect-ratio: auto 145 / 98;
    cursor: pointer;
`;

export default function SiteInfo({ $isLastBottom, $isLastLeft }: BaseContentDivProps) {
    return (
        <SiteInfoStyle $isLastBottom={$isLastBottom} $isLastLeft={$isLastLeft}>
            <FlexDivWithPadding>
                <ClickableImg 
                    src="/infos/Censor_PGb.gif" 
                    onClick={() => window.open("http://www.mabsland.com/Adoption.html")}
                    alt="This website is PG rated" />
            </FlexDivWithPadding>
            <WebsiteCarbonBadge url="www.privatenoob.top" co2="0.36" percentage="61" />
        </SiteInfoStyle>
    );
}
