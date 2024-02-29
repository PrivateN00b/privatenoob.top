import styled from "styled-components";
import BaseContentDiv from "../../../../components/ui/BaseContentDiv";
import CenteredH1 from "../../../../components/ui/CenteredH1";
import CenteredH2 from "../../../../components/ui/CenteredH2";
import Container from "../../../../components/ui/Container";
import {
  IngredientParagraph,
  LeftColumn,
  LeftHeader,
  RightColumn,
  RightHeader,
  Row,
} from "../components/RecipeColumns";

const StyledUL = styled.ul`
  margin: 0 20px 0 20px;
`;

const StyledOL = styled.ol`
  margin: 0 20px 0 20px;
  padding-left: 0;
`;

export function ScrambledEggs() {
  return (
    <Container>
      <BaseContentDiv>
        <CenteredH1>Scrambled Eggs (my specialty :3)</CenteredH1>
        <p style={{ textAlign: "center" }}>
          <strong>Pre-cook:</strong> 10 minutes, <strong>Cooking:</strong> 1-2
          minutes, <strong>Tools:</strong> pan, bowl
        </p>
        <p style={{ textAlign: "center" }}>
          <strong>Serves:</strong> 1 serving
        </p>
        <Row>
          <LeftColumn>
            <LeftHeader>Ingredients</LeftHeader>
            <IngredientParagraph>3 eggs</IngredientParagraph>
            <IngredientParagraph>1 onion</IngredientParagraph>
            <IngredientParagraph>
              A bit of bell pepper or green paprika to taste
            </IngredientParagraph>
            <IngredientParagraph>Vegetable or olive oil</IngredientParagraph>
            <IngredientParagraph>
              (optional) 2 slices of ham or salami
            </IngredientParagraph>
            <IngredientParagraph>A bit of salt</IngredientParagraph>
            <IngredientParagraph>
              (optional) A bit of black pepper
            </IngredientParagraph>
            <IngredientParagraph>
              (optional) A bit of marjoram
            </IngredientParagraph>
          </LeftColumn>
          <RightColumn>
            <RightHeader>Steps</RightHeader>
            <StyledOL>
              <li>
                <p>Chop the onion as small bits as possible</p>
              </li>
              <li>
                <p>
                  Chop some slices from the paprika (I usually do 5-6 slices of
                  green paprika per-say) and slice up these pieces into small
                  bits too
                </p>
              </li>
              <li>
                <p>
                  Slice up the hams or salamis just like the way the onion or
                  paprikas have been done
                </p>
              </li>
              <li>
                <p>
                  Put your pan on low heat and pour just enough oils to cover
                  the whole surface (or almost cover it).
                </p>
              </li>
              <li>
                <p>
                  Throw the chopped up ingredients into it. Don't forget to stir
                  the contents 20 seconds every time
                </p>
              </li>
              <li>
                <p>
                  While cooking the ingredients, crack up those eggs into a
                  bowl, add a bit of salt to it and beat them UP! 🥊
                </p>
              </li>
              <li>
                <p>
                  If the ingredients have been cooked just enough for you (ex:
                  onions are browned along the edges) then pour the eggs into
                  the mix and stir them until the eggs have been cooked just
                  enough for you
                </p>
              </li>
              <li>
                <p>
                  Add some mayoram, black pepper or any other spices you feel it
                  would the food well
                </p>
              </li>
              <li>
                <p>ENJOY!</p>
              </li>
            </StyledOL>
          </RightColumn>
        </Row>

        <CenteredH2>Sources</CenteredH2>
        <StyledUL style={{ marginBottom: "20px" }}>
          <li>My parents and some insanity :3</li>
        </StyledUL>
      </BaseContentDiv>
    </Container>
  );
}
