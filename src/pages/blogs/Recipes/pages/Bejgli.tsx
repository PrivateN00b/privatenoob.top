import BaseContentDiv from "../../../../components/ui/BaseContentDiv";
import CenteredH1 from "../../../../components/ui/CenteredH1";
import CenteredH2 from "../../../../components/ui/CenteredH2";
import Container from "../../../../components/ui/Container";
import StyledParagraph from "../../../../components/ui/StyledParagraph";

export function Bejgli() {
  return (
    <Container>
      <BaseContentDiv>
        <CenteredH1>Walnut & Coconut White Chocolate Rolls (Bejgli)</CenteredH1>
        <p style={{ textAlign: "center" }}>
          Recipe: 3 hours, Cooking: 1 hours, Tools: yes
        </p>
        <CenteredH2>Ingredients</CenteredH2>
        <p style={{ textAlign: "center" }}>Serves = EVERYONE (4 rolls)</p>
        <StyledParagraph>Dough:</StyledParagraph>
        <ul>
          <li>
            <p>1 kg flour</p>
          </li>
          <li>
            <p>40 dkg butter or margarin</p>
          </li>
          <li>
            <p>2 egg yolk</p>
          </li>
          <li>
            <p>2,5 dl milk</p>
          </li>
          <li>
            <p>10 dkg powdered sugar</p>
          </li>
          <li>
            <p>1 coffespoon of salt</p>
          </li>
        </ul>
        <StyledParagraph>Walnut filling for 2 rolls:</StyledParagraph>
        <ul>
          <li>
            <p>3 dl milk</p>
          </li>
          <li>
            <p>2-3 vanilla package</p>
          </li>
          <li>
            <p>0.5 kg well and lightly minced walnut</p>
          </li>
          <li>
            <p>2 pieces of lemon skin</p>
          </li>
          <li>
            <p>1 piece of orange skin</p>
          </li>
          <li>
            <p>1 tablespoon of cinnamon</p>
          </li>
          <li>
            <p>20-30 dkg sugar</p>
          </li>
        </ul>
        <StyledParagraph>
          Coconut white chocolate filling for 2 rolls:
        </StyledParagraph>
        <ul>
          <li>
            <p>3 dl milk</p>
          </li>
          <li>
            <p>2 vanilla package</p>
          </li>
          <li>
            <p>20 dkg grated coconut</p>
          </li>
          <li>
            <p>2 dkg butter or margarin</p>
          </li>
          <li>
            <p>1 pinch of salt</p>
          </li>
          <li>
            <p>1 tablespoon of flour</p>
          </li>
          <li>
            <p>100 g white chocolate</p>
          </li>
        </ul>
        <CenteredH2>Steps</CenteredH2>
        <CenteredH2>Sources</CenteredH2>
        <ul>
          <li>
            <a href="https://youtu.be/rTyQWQYn318?si=qoFNhAWbbub-E9Sk">
              Bejgli Beigli Diós Mákos @Szoky konyhája.
            </a>{" "}
            Retrieved 2024.01.27
          </li>
          <li>
            {" "}
            <a href="https://colore.hu/egeszseg/recept/kokuszos-feher-csokis-bejgli-ami-nem-reped-videoval/">
              Kókuszos-fehércsokis bejgli, ami nem reped! (Videóval!).
            </a>{" "}
            Retrieved 2024.01.27
          </li>
        </ul>
      </BaseContentDiv>
    </Container>
  );
}
