import styled from "styled-components";
import BaseContentDiv from "../../components/div/BaseContentDiv";
import { BaseProps } from "../../utils/interfaces";
import { FlexDivWithPadding } from "../../components/div/FlexDivs";
import { useEffect, useRef } from "react";

const SiteInfoStyle = styled(BaseContentDiv)`
    padding-top: 20px;
`;

const ClickableImg = styled.img`
    cursor: pointer;
`;

export default function SiteInfo({ isLast, display }: BaseProps) {
    const carbonBadgeRef = useRef(null);

    useEffect(() => {
        if (carbonBadgeRef.current) {
            const script = document.createElement('script');
            script.src = "https://unpkg.com/website-carbon-badges@1.1.3/b.min.js";
            script.async = true;
            document.body.appendChild(script);

            return () => {
                document.body.removeChild(script);
            };
        }
    }, []);

    return (
        <SiteInfoStyle isLast={isLast} display={display}>
            <FlexDivWithPadding>
                <ClickableImg src="/infos/Censor_PGb.gif" onClick={() => window.open("http://www.mabsland.com/Adoption.html")}/>
            </FlexDivWithPadding>
            <div id="wcb" className="carbonbadge wcb-d" ref={carbonBadgeRef}></div>
        </SiteInfoStyle>
    );
}
