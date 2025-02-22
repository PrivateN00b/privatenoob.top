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

const Label = styled.label`
    background: red;
    color: white;
    font-weight: bold;
    padding: 5px;
    border-radius: 3px;

    --s: 2px; /* control the size*/
    --c1: #c02942;
    --c2: #e01b24;
    --c3: #ed333b;
  
   --g: var(--s); /* gap between lines */
   background:
     conic-gradient(at var(--s) calc(100% - var(--s)),#0000 270deg,var(--c1) 0) calc(var(--s) + var(--g)) 0,
     linear-gradient(var(--c2) var(--s),#0000 0) 0 var(--g),
     conic-gradient(at var(--s) calc(100% - var(--s)),#0000 90deg,var(--c2) 0 180deg, var(--c1) 0),
     var(--c3);
   background-size: calc(2*(var(--s) + var(--g))) calc(2*(var(--s) + var(--g)));
`

const SegmentDisplayStyle = styled.canvas`
    margin-top: 10px;
	background: black;
`;

function SegmentDisplay() {
    useEffect(() => {
        createSegmentDisplay();
    }, []);

    return <SegmentDisplayStyle id="segmentDisplayCanvas" height={70} width={100}></SegmentDisplayStyle>;
}

export default function PortionAdjuster() {
    return (
        <PortionDiv>
            {/* Display Part */}
            <SegmentDisplay />
            <Label>PORTION SIZE</Label>
            {/* Increment/Decrement Part */}
        </PortionDiv>
    );
}
