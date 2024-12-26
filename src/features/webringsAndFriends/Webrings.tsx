import styled from "styled-components"
const FediringLink = styled.a`
    cursor: pointer;
    padding: 10px;
    text-decoration: none;
    /* 1. gradient: solid background
    2. gradient: the border background
    https://www.learnwithjason.dev/blog/animated-css-gradient-border/ */
    @property --bg-angle {
        inherits: false;
        initial-value: 0deg;
        syntax: '<angle>';
    }

    @keyframes spin {
        0% {
            --bg-angle: 0deg;
        }
        100% {
            --bg-angle: 360deg;
        }
    }
    
    background: linear-gradient(
        to bottom,
        ${({ theme }) => theme.colors.quarteriary},
        ${({ theme }) => theme.colors.quarteriary}
      ) padding-box, conic-gradient(
        from var(--bg-angle) in oklch longer hue,
        oklch(1 0.37 0) 0 0
      ) border-box;

    animation: spin 3s linear infinite running;
    border: 5px solid transparent;
`

const Letter = styled.span<{ $color: string }>`
    font-weight: bold;
    color: ${({ $color }) => $color};
    letter-spacing: 3px;
`

const LeftTriangle = styled.a`
    --r:6px; /* border radius */

    height: 180px;
    aspect-ratio: cos(30deg);
    mask:
        linear-gradient(90deg,#0000 calc(3*var(--r)/2),#000 0),
        radial-gradient(var(--r) at calc(2*var(--r)) 50%,#000 98%,#0000 101%);
    clip-path: polygon(0 50%,100% 100%,100% 0);
    background: #000285;
    margin-right: 10px;
    padding: 15px 20px 15px 20px;
`

const RightTriangle = styled.a`
    --r:6px; /* border radius */

    height: 180px;
    aspect-ratio: cos(30deg);
    mask:
        linear-gradient(-90deg,#0000 calc(3*var(--r)/2),#000 0),
        radial-gradient(var(--r) at calc(100% - 2*var(--r)) 50%,#000 98%,#0000 101%);
    clip-path: polygon(100% 50%,0 100%,0 0);
    background: #000285;
    margin-left: 10px;
    padding: 15px 20px 15px 20px;
`


export default function Webrings() {
    return <p>
        <LeftTriangle href="https://fediring.net/previous?host=privatenoob.top" />
        <FediringLink href="https://fediring.net/">
            <Letter $color="#feca00">F</Letter>
            <Letter $color="#63fe00">ED</Letter>
            <Letter $color="#00a3fe">IR</Letter>
            <Letter $color="#9500fe">IN</Letter>
            <Letter $color="#fe0000">G</Letter>
        </FediringLink>
        <RightTriangle href="https://fediring.net/next?host=privatenoob.top" />
    </p>
}