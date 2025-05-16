import { FlexDivWithPadding } from "../../components/div/FlexDivs";
import ButtonLink from "../../components/img/ButtonLink";

export default function WebFriends() {
    return  <FlexDivWithPadding>
        <ButtonLink 
            src="/infos/links/lunarArchiveButtonV2.2.gif"
            url="https://lunararchive.neocities.org/"
            alt="My friend's cool desktop emulating website with some lore going on there :3" />
        <ButtonLink 
            src="/infos/links/oddworld_nemin.png"
            url="https://oddwords.hu/#"
            alt="My friend's website which talks about OddWorlds" />
    </FlexDivWithPadding>
}