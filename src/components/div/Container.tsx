import { styled } from "styled-components";

const Container = styled.div<{ $flexDirection?: string }>`
  display: flex;
  justify-content: space-between;
  flex-direction: ${({ $flexDirection }) => $flexDirection ? $flexDirection : "row"};

  @media (max-width: 900px) {
    display: block;
  }

  a:link {
    color: ${({ theme }) => theme.colors.link};
  }

  a:visited {
    color: ${({ theme }) => theme.colors.linkVisited};
  }
`;

export default Container;
