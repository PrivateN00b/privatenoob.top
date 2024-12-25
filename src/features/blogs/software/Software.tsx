import BaseContentDiv from "../../../components/div/BaseContentDiv";
import CenteredH1 from "../../../components/text/CenteredH1";
import Container from "../../../components/div/Container";
import StyledParagraph from "../../../components/text/StyledParagraph";

export default function Software() {
  return (
    <Container>
      <BaseContentDiv isLastBottom={true}>
        <CenteredH1>Articles about Tech</CenteredH1>
        <StyledParagraph style={{ marginBottom: "20px" }}>
          Thoughts empty, mom's spaghetti
        </StyledParagraph>
      </BaseContentDiv>
    </Container>
  );
}
