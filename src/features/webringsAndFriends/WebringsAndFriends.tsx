import BaseContentDiv from "../../components/div/BaseContentDiv";
import { FlexDivWithPadding } from "../../components/div/FlexDivs";
import ButtonLink from "../../components/img/ButtonLink";
import { CenteredH2 } from "../../components/text/CenteredHeaders";
import { BaseContentDivProps } from "../../utils/interfaces";
import Webrings from "./Webrings";

export default function WebringsAndFriends({ $isLastBottom }: BaseContentDivProps) {
    return <BaseContentDiv $isLastBottom={$isLastBottom}>
        <CenteredH2>Webrings</CenteredH2>
        <Webrings />
        <CenteredH2>Friendos! :3</CenteredH2>
        <FlexDivWithPadding>
            <ButtonLink 
                src="/infos/links/lunarArchiveButtonV2.2.gif"
                url="https://lunararchive.neocities.org/"
                alt="My friend's cool desktop emulating website with some lore going on there :3" />
            <ButtonLink 
                src="/infos/links/oddworld_nemin.png"
                url="https://oddwords.hu/#"
                alt="My friend's website which talks about OddWorlds" />
        </FlexDivWithPadding>
        <br />
    </BaseContentDiv>
}