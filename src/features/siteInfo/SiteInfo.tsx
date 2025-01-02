import styled from "styled-components";
import BaseContentDiv from "../../components/div/BaseContentDiv";
import { BaseProps } from "../../utils/interfaces";
import { FlexDivWithPadding } from "../../components/div/FlexDivs";
import WebsiteCarbonBadge from "./WebsiteCarbonBadge/WebsiteCarbonBadge";

const SiteInfoStyle = styled(BaseContentDiv)`
    padding-top: 20px;
`;

const ClickableImg = styled.img`
    cursor: pointer;
`;

export default function SiteInfo({ isLastBottom, isLastLeft }: BaseProps) {
    return (
        <SiteInfoStyle isLastBottom={isLastBottom} isLastLeft={isLastLeft}>
            <FlexDivWithPadding>
                <ClickableImg src="/infos/Censor_PGb.gif" onClick={() => window.open("http://www.mabsland.com/Adoption.html")}/>
            </FlexDivWithPadding>
            <WebsiteCarbonBadge url="www.google.com" />
        </SiteInfoStyle>
    );
}
