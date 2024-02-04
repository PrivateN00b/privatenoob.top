import styled from "styled-components";

const Row = styled.div`
  display: flex;
`;

const LeftColumn = styled.div`
  width: 50%;
  float: left;
  text-align: right;
  padding: 0 40px 0 20px;
`;

const RightColumn = styled.div`
  width: 50%;
  float: right;
  padding: 0 20px 0 40px;
`;

const LeftHeader = styled.h2`
  text-align: right;
`;

const RightHeader = styled.h2`
  text-align: left;
`;

const SubHeader = styled.h4`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.link};
  padding: 10px 0;
  border-top: 3px solid ${({ theme }) => theme.colors.secondary};
  border-bottom: 3px solid ${({ theme }) => theme.colors.secondary};
`;

const IngredientParagraph = styled.p`
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
`;

export {
  Row,
  LeftColumn,
  RightColumn,
  LeftHeader,
  RightHeader,
  SubHeader,
  IngredientParagraph,
};
