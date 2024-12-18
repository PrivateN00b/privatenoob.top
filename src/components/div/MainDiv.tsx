import styled from "styled-components";
import BaseContentDiv from "../div/BaseContentDiv";

const MainDiv = styled(BaseContentDiv)`
  width: 70%;
  margin: 0 0 0 20px;

  @media (max-width: 900px) {
    width: 100%;
    margin: 20px 0 0 0;
  }
`;

export default MainDiv;
