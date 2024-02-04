import BaseContentDiv from "../../../components/ui/BaseContentDiv";
import CenteredH1 from "../../../components/ui/CenteredH1";
import Container from "../../../components/ui/Container";
import StyledParagraph from "../../../components/ui/StyledParagraph";

export default function Software() {
  return (
    <Container>
      <BaseContentDiv isLast={true}>
        <CenteredH1>Articles about Tech</CenteredH1>
        <StyledParagraph style={{ marginBottom: "20px" }}>
          Thoughts empty, mom's spaghetti
        </StyledParagraph>
      </BaseContentDiv>
    </Container>
  );
}
