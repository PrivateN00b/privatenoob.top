import { useEffect } from "react";
import styled from "styled-components";
import createSegmentDisplay from "./segmentDisplay";

const PortionDiv = styled.div`
    width: 160px;
    border: 1px solid ${({ theme }) => theme.colors.secondary};
    display: inline-block;
    padding-bottom: 50px;

    background: -webkit-radial-gradient(center, circle, rgba(255, 255, 255, 0.15), rgba(255,255,255,0) 20%, rgba(255,255,255,0) 21%), -webkit-radial-gradient(center, circle, rgba(0,0,0,.2), rgba(0,0,0,0) 20%, rgba(0,0,0,0) 21%), -webkit-radial-gradient(center, circle farthest-corner, #c0c0c03d, #c0c0c026);
    background: -moz-radial-gradient(center, circle, rgba(255,255,255,0.15), rgba(255,255,255,0) 20%, rgba(255,255,255,0) 21%), -webkit-radial-gradient(center, circle, rgba(0,0,0,.2), rgba(0,0,0,0) 20%, rgba(0,0,0,0) 21%), -webkit-radial-gradient(center, circle farthest-corner, #c0c0c03d, #c0c0c026);
    background: -ms-radial-gradient(center, circle, rgba(255,255,255,.0.15), rgba(255,255,255,0) 20%, rgba(255,255,255,0) 21%), -webkit-radial-gradient(center, circle, rgba(0,0,0,.2), rgba(0,0,0,0) 20%, rgba(0,0,0,0) 21%), -webkit-radial-gradient(center, circle farthest-corner, #c0c0c03d, #c0c0c026);
    background: -o-radial-gradient(center, circle, rgba(255,255,255,0.15), rgba(255,255,255,0) 20%, rgba(255,255,255,0) 21%), -webkit-radial-gradient(center, circle, rgba(0,0,0,.2), rgba(0,0,0,0) 20%, rgba(0,0,0,0) 21%), -webkit-radial-gradient(center, circle farthest-corner, #c0c0c03d, #c0c0c026);
    background: radial-gradient(center, circle, rgba(255,255,255,0.15), rgba(255,255,255,0) 20%, rgba(255,255,255,0) 21%), -webkit-radial-gradient(center, circle, rgba(0,0,0,.2), rgba(0,0,0,0) 20%, rgba(0,0,0,0) 21%), -webkit-radial-gradient(center, circle farthest-corner, #c0c0c03d, #c0c0c026);
    background-size: 10px 10px, 10px 10px, 100% 100%;
    background-position: 1px 1px, 0px 0px, center center;
`;

const SegmentDisplayStyle = styled.canvas`
    margin-top: 10px;
	background: black;
`;

function SegmentDisplay() {
    useEffect(() => {
        createSegmentDisplay();
    }, []);

    return <SegmentDisplayStyle id="segmentDisplayCanvas" height={70} width={120}></SegmentDisplayStyle>;
}

export default function PortionAdjuster() {
    return (
        <PortionDiv>
            {/* Display Part */}
            <SegmentDisplay />
            {/* Increment/Decrement Part */}
        </PortionDiv>
    );
}
