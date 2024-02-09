import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 900px) {
    display: block;
  }

  h1,
  h2 {
    /* color: ${({ theme }) => theme.colors.primary}; */
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    background-image: linear-gradient(
      45deg,
      aqua,
      magenta,
      ${({ theme }) => theme.colors.primary}
    );
    animation: animate 5s linear infinite;
    background-size: 400%;
  }

  @keyframes animate {
    0% {
      background-position: 0 0;
    }
    25% {
      background-position: 100% 0;
    }
    50% {
      background-position: 100% 100%;
    }
    75% {
      background-position: 0 100%;
    }
    100% {
      background-position: 0 0;
    }
  }

  a:link {
    color: ${({ theme }) => theme.colors.link};
  }

  a:visited {
    color: ${({ theme }) => theme.colors.linkVisited};
  }
`;

export default Container;
