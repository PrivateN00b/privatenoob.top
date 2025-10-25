import React from "react";
import { usePageContext } from "vike-react/usePageContext";
import Container from "../../components/div/Container";
import { BaseContentDiv } from "../../components/div/BaseContentDiv";
import { CenteredH1 } from "../../components/text/CenteredHeaders";

export default function Page() {
  const { is404 } = usePageContext();
  if (is404) {
    return (
        <Container>
        <meta name="description" content="404 page" />
        <BaseContentDiv $isLastBottom={true}>
            <CenteredH1>UNDER CONSTRUCTION</CenteredH1>
            <div
            style={{
                textAlign: "center",
                paddingBottom: "20px",
            }}
            >
            <img src="/im-sorry-ena-ena.gif" style={{ maxHeight: "270px" }} />
            <img src="/under-construction.gif" />
            <img
                src="/erratically-spinning-rat-erratic.gif"
                style={{ maxHeight: "270px" }}
            />
            </div>
        </BaseContentDiv>
        </Container>
    );
  }
  return (
    <>
      <h1>500 Internal Server Error</h1>
      <p>Something went wrong.</p>
    </>
  );
}
