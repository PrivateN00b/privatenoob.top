import styled from "styled-components";

export const FlexDiv = styled.div`
  display: flex;

  @media (max-width: 564px) {
    flex-wrap: wrap;
  }
`

export const FlexDivWithPadding = styled(FlexDiv)`
    padding: 0 20px 0 20px;
    justify-content: center;
`