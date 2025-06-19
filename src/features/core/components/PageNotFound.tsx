import { BaseContentDiv } from "../../../components/div/BaseContentDiv";
import Container from "../../../components/div/Container";
import { CenteredH1 } from "../../../components/text/CenteredHeaders";

export function PageNotFound() {
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

export default PageNotFound;
