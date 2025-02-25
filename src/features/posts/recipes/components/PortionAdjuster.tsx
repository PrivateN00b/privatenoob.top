import { useEffect, useState } from "react";
import styled from "styled-components";
import createSegmentDisplay from "./segmentDisplay";
import { PortionProps } from "../utils/RecipesTypes";

const PortionDiv = styled.div`
    width: 280px;
    border: 1px solid ${({ theme }) => theme.colors.secondary};
    display: inline-block;
    margin-bottom: 30px;

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

const ButtonDiv = styled.div`
    display: flex;
    padding: 10px;
    justify-content: center;
`

const PortionButton = styled.button`
    margin: 0 5px;
    height: 40px;
    width: 100px;
    box-shadow: 0 5px 0px #000450;
    transition: all 0.2 ease;
    cursor: pointer;
    border: 2px solid #000450;
    border-radius: 6px;
    background: #000dbe;
    font-size: ${({ theme }) => theme.fontSize.medium };
    font-weight: bold;

    &:hover {
        box-shadow: 0 4px 0px #000450;
        transform: translateY(1px);
    }

    &:active {
        box-shadow: none;
        transform: translateY(5px);
    }
`

const SegmentDisplayStyle = styled.canvas`
    margin: 10px 60px 0px;
	background: #110600;
`;

function SegmentDisplay({ portion }: PortionProps) {
    useEffect(() => {
        createSegmentDisplay(portion.toString());
        console.log("portion:",portion)
    }, [portion]);

    return <SegmentDisplayStyle id="segmentDisplayCanvas" height={70} width={100}></SegmentDisplayStyle>;
}

export default function PortionAdjuster({ portion, setPortion }: PortionProps) {
    const changePortion = (amount: number) => {
        if ((portion + amount) >= 5 && (portion + amount) <= 95 && setPortion)
            setPortion(portion + amount)
    }

    return (
        <PortionDiv>
            {/* Display Part */}
            <SegmentDisplay portion={portion}/>
            <Label>PORTION SIZE</Label>
            <ButtonDiv>
                <PortionButton onClick={() => changePortion(-10)}>-1</PortionButton>
                <PortionButton onClick={() => changePortion(-5)}>-0.5</PortionButton>
                <PortionButton onClick={() => changePortion(5)}>+0.5</PortionButton>
                <PortionButton onClick={() => changePortion(10)}>+1</PortionButton>
            </ButtonDiv>
            {/* Increment/Decrement Part */}
        </PortionDiv>
    );
}
