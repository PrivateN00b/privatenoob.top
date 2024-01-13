import BaseContentDiv from "../components/ui/BaseContentDiv";
import CenteredH1 from "../components/ui/CenteredH1";
import Container from "../components/ui/Container";

export function PageNotFound() {
  return (
    <Container>
      <BaseContentDiv isLast={true}>
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
