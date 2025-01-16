import styled from "styled-components";
import BaseContentDiv from "../../components/div/BaseContentDiv";
import { BaseContentDivProps } from "../../utils/interfaces";
import { FlexDivWithPadding } from "../../components/div/FlexDivs";
import WebsiteCarbonBadge from "./WebsiteCarbonBadge/WebsiteCarbonBadge";

const SiteInfoStyle = styled(BaseContentDiv)`
    padding-top: 20px;
`;

const ClickableImg = styled.img`
    cursor: pointer;
`;

export default function SiteInfo({ $isLastBottom, $isLastLeft }: BaseContentDivProps) {
    return (
        <SiteInfoStyle $isLastBottom={$isLastBottom} $isLastLeft={$isLastLeft}>
            <FlexDivWithPadding>
                <ClickableImg src="/infos/Censor_PGb.gif" onClick={() => window.open("http://www.mabsland.com/Adoption.html")}/>
            </FlexDivWithPadding>
            <WebsiteCarbonBadge url="www.privatenoob.top" co2="0.8" percentage="32" percentCol="white"/>
        </SiteInfoStyle>
    );
}
