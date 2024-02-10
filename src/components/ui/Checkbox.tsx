import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styled from "styled-components";

const StyledLabel = styled.label<{ $checked: boolean }>`
  display: inline-block;
  border-radius: 10px;
  background-color: ${({ theme, $checked }) =>
    $checked ? theme.colors.link : theme.colors.bg};
  text-align: center;
  margin: 0 20px 20px 0;
  padding: 12px 21.5px 12px 28px;
  outline-style: outset;
  outline-color: ${({ theme, $checked }) =>
    $checked ? theme.colors.link : theme.colors.tertiary};
  user-select: none;
  cursor: pointer;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    inset: 2px;
    background-color: ${({ theme }) => theme.colors.quarteriary};
    border-radius: inherit;
  }

  span.name {
    display: inline-flex;
    transform: ${({ $checked }) => ($checked ? "translateX(-5px)" : "none")};
    transition: transform 0.2s ease;
    color: ${({ theme, $checked }) =>
      $checked ? theme.colors.link : theme.colors.text1};
    position: relative;
    z-index: 2;
  }

  span.checkmark {
    display: inline-flex;
    visibility: ${({ $checked }) => ($checked ? "visible" : "hidden")};
    transform: ${({ $checked }) => ($checked ? "translateX(5px)" : "none")};
    transition: transform 0.2s ease;
    color: ${({ theme, $checked }) =>
      $checked ? theme.colors.link : theme.colors.text1};
    position: relative;
    z-index: 2;
  }
`;

interface CheckBoxProps {
  name: string;
}

export default function CheckBox({ name }: CheckBoxProps) {
  const [checked, setChecked] = useState(false);

  return (
    <StyledLabel $checked={checked}>
      <input
        type="checkbox"
        onChange={() => setChecked(!checked)}
        style={{ display: "none" }}
      />
      <span style={{ fontWeight: "bold" }} className="name">
        {name}
      </span>
      <span className="checkmark">
        <FontAwesomeIcon icon={faCheck} />
      </span>
    </StyledLabel>
  );
}
