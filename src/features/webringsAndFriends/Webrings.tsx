import styled, { css, keyframes } from "styled-components"
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
        oklch(0.1 0.2 240 / 0.95),
        oklch(0.1 0.2 240 / 0.95)
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

export default function Webrings() {
    return <p>
        <a href="https://fediring.net/previous?host=privatenoob.top">←</a>
        <FediringLink href="https://fediring.net/">
            <Letter $color="#feca00">F</Letter>
            <Letter $color="#63fe00">ED</Letter>
            <Letter $color="#00a3fe">IR</Letter>
            <Letter $color="#9500fe">IN</Letter>
            <Letter $color="#fe0000">G</Letter>
        </FediringLink>
        <a href="https://fediring.net/next?host=privatenoob.top">→</a>
    </p>
}