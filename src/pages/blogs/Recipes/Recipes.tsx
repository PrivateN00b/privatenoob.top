import BaseContentDiv from "../../../components/ui/BaseContentDiv";
import CenteredH1 from "../../../components/ui/CenteredH1";
import Container from "../../../components/ui/Container";
import { Recipe } from "./Recipe";

function Recipes() {
  return (
    <Container>
      <BaseContentDiv isLast={true}>
        <CenteredH1>Recipes</CenteredH1>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            paddingBottom: "40px",
          }}
        >
          <Recipe to="Bejgli" />
          <Recipe to="Bejgli" />
          <Recipe to="Bejgli" />
        </div>
      </BaseContentDiv>
    </Container>
  );
}

export default Recipes;
