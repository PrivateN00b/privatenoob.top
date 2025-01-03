import BaseContentDiv from "../../components/div/BaseContentDiv";
import { FlexDivWithPadding } from "../../components/div/FlexDivs";
import ButtonLink from "../../components/img/ButtonLink";
import CenteredH2 from "../../components/text/CenteredH2";
import StyledParagraph from "../../components/text/StyledParagraph";
import { BaseProps } from "../../utils/interfaces";

export default function WebringsAndFriends({ isLastBottom }: BaseProps) {
    return <BaseContentDiv isLastBottom={isLastBottom}>
        <CenteredH2>Webrings</CenteredH2>
        <StyledParagraph>UNDER CONSTRUCTION</StyledParagraph>
        <CenteredH2>Friendos! :3</CenteredH2>
        <FlexDivWithPadding>
            <ButtonLink 
                src="/infos/links/lunarArchiveButtonV2.2.gif"
                url="https://lunararchive.neocities.org/" />
            <ButtonLink 
                src="/infos/links/oddworld_nemin.png"
                url="https://oddwords.hu/#" />
        </FlexDivWithPadding>
    </BaseContentDiv>
}