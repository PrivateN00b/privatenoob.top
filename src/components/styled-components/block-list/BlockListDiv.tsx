import styled, { keyframes } from "styled-components";

const BlockListDiv = styled.div`
  display: inline-block;
  width: 40%;
  margin: 20px;
  border-radius: 20px;
  text-align: center;
  min-width: 300px;
  max-width: 1000px;
  flex-grow: 1;
  height: 100%;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    top: 20%;
    left: -25%;
    height: 60%;
    width: 150%;
    background: conic-gradient(${({ theme }) => theme.colors.tertiary}, aqua);
    border-radius: inherit;
    animation: blocklist-border-animate 5s linear infinite;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 2px;
    background-color: ${({ theme }) => theme.colors.quarteriary};
    background-image: url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='29' height='50.115' patternTransform='scale(2) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(0, 0%, 100%, 0)'/><path d='M14.498 16.858L0 8.488.002-8.257l14.5-8.374L29-8.26l-.002 16.745zm0 50.06L0 58.548l.002-16.745 14.5-8.373L29 41.8l-.002 16.744zM28.996 41.8l-14.498-8.37.002-16.744L29 8.312l14.498 8.37-.002 16.745zm-29 0l-14.498-8.37.002-16.744L0 8.312l14.498 8.37-.002 16.745z'  stroke-width='1' stroke='hsla(239, 100%, 25%, 1)' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>");
    border-radius: inherit;
  }

  @keyframes blocklist-border-animate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default BlockListDiv;
