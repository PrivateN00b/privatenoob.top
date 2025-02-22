import { useEffect } from "react";
import styled from "styled-components";
import createSegmentDisplay from "./segmentDisplay";

const PortionDiv = styled.div`
    border: 1px solid ${({ theme }) => theme.colors.secondary};
    display: inline-block;
    padding-bottom: 50px;
`;

const SegmentDisplayStyle = styled.canvas`
    background: lightgreen;
`;

function SegmentDisplay() {
    useEffect(() => {
        createSegmentDisplay();
    }, []);

    return <SegmentDisplayStyle id="segmentDisplayCanvas" height={100} width={240}></SegmentDisplayStyle>;
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
