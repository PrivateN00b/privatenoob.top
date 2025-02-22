import styled from "styled-components";

const IngredientsColumn = styled.div`
  display: inline-block;
`;

const StepsColumn = styled.div`
  padding: 0 40px;
`;

const SubHeader = styled.h4`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.link};
  margin: 0;
  padding: 10px 0;
  border: 3px solid ${({ theme }) => theme.colors.secondary};
  border-bottom: 3px solid ${({ theme }) => theme.colors.secondary};
`;

const IngredientDiv = styled.div.attrs(props => ({
  className: props.className,
}))`
  position: relative;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
  border-left: 1px solid ${({ theme }) => theme.colors.secondary};
  border-right: 1px solid ${({ theme }) => theme.colors.secondary};

  &.empty-title {
    border-top: 1px solid ${({ theme }) => theme.colors.secondary};
  }
`;

const IngredientParagraph = styled.p`
  margin: 0;
  padding: 20px 100px 0 20px;
`;

const Square = styled.div`
  --height: 14px;
  --width: 14px;

  position: absolute;
  left: calc(100% - 30px);
  top: calc(50% - var(--height) / 1.5); 
  height: var(--height);
  width: var(--width);
  border: 3px solid ${({ theme }) => theme.colors.secondary};
`

export {
  IngredientsColumn,
  StepsColumn,
  SubHeader,
  IngredientDiv,
  IngredientParagraph,
  Square
};
