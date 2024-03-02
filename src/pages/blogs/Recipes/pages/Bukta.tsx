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
  SubHeader,
} from "../components/RecipeColumns";

const StyledUL = styled.ul`
  margin: 0 20px 0 20px;
`;

const StyledOL = styled.ol`
  margin: 0 20px 0 20px;
  padding-left: 0;
`;

export function Bukta() {
  return (
    <Container>
      <BaseContentDiv>
        <CenteredH1>Jam Filled Yeast Pastry</CenteredH1>
        <p style={{ textAlign: "center" }}>
          <strong>Recipe:</strong> 2-3 hours, <strong>Cooking:</strong> 20-25
          minutes, <strong>Tools:</strong> huge bowl, baking tray, roller, (+2
          bowls?)
        </p>
        <p style={{ textAlign: "center" }}>
          <strong>Serves:</strong> EVERYONE (4 rolls)
        </p>
        <Row>
          <LeftColumn>
            <LeftHeader>Ingredients</LeftHeader>
            <SubHeader>Dough:</SubHeader>
            <IngredientParagraph>600g flour (BL55)</IngredientParagraph>
            <IngredientParagraph>
              25 g fresh yeast or 7g dried yeast
            </IngredientParagraph>
            <IngredientParagraph>6 g salt</IngredientParagraph>
            <IngredientParagraph>75 g sugar</IngredientParagraph>
            <IngredientParagraph>90 g butter or margarin</IngredientParagraph>
            <IngredientParagraph>2 egg yolk</IngredientParagraph>
            <IngredientParagraph>2,6 dl milk</IngredientParagraph>
            <IngredientParagraph>
              (optional) 1 piece of grated lemon skin
            </IngredientParagraph>
            <IngredientParagraph>1 egg for lubrication</IngredientParagraph>
            <SubHeader>Filling:</SubHeader>
            <IngredientParagraph>Whatever jam you prefer</IngredientParagraph>
          </LeftColumn>
          <RightColumn>
            <RightHeader>Steps</RightHeader>
            <StyledOL>
              <li>
                <p>
                  Put a little bit of sugar and the yeast into a room
                  temperature milk, then stir it a bit to start the yeast
                  process
                </p>
              </li>
              <li>
                <p>
                  Combine the flour, salt, sugar, 2 egg yolk, grated lemon skin
                  and the yeasty milk together into a huge bowl and stir them up
                  until the dough starts to come together (1-3 minutes probably)
                </p>
              </li>
              <li>
                <p>
                  Add the butter/margarin and finish the dough forming process
                  (definitely more than 1-3 minutes)
                </p>
              </li>
              <li>
                <p>
                  Cover the dough with a wrap, tray or whatever and let it rest
                  for 35 minutes
                </p>
              </li>
              <li>
                <p>
                  Create 2 equally sized dumplings and shape them into a
                  rectangle. Cover them with 2 bowls and let them rest for 10-15
                  minutes
                </p>
              </li>
              <li>
                <p>
                  Knead these out into a rectangle shape if you can and cut
                  every dumpling into 6 equally sized pieces (There should be 12
                  pieces if you have 2 dumplings)
                </p>
              </li>
              <li>
                <p>
                  Put 1 line of jam (size unknown currently) on each pieces
                  (horizontally center, but vertically it should be closer to
                  the bottom a bit). Fold it once, then close all the gaps by
                  pressing them down (don't be too gentle). After that roll it
                  once, and press both ends, plus the rolled dough line
                </p>
              </li>
              <li>
                <p>Repeat this with the others</p>
              </li>
              <li>
                <p>
                  Bring out a baking tray, put a baking wrap onto it and put all
                  of these pieces onto it (folded lines should be at the
                  bottom!)
                </p>
              </li>
              <li>
                <p>Lubricate them with 1 egg and rest them for 30-50 minutes</p>
              </li>
              <li>
                <p>
                  Lubricate them again and put it into the oven for 180 C for
                  20-25 minutes
                </p>
              </li>
              <li>
                <p>TASTE THE WONDER! ^^</p>
              </li>
            </StyledOL>
          </RightColumn>
        </Row>

        <CenteredH2>Sources</CenteredH2>
        <StyledUL style={{ marginBottom: "20px" }}>
          <li>
            <a href="https://www.youtube.com/watch?v=_76NFtmdygY&t=359s">
              Hagyományos Ízes Bukta házilag - Gábor a Házi Pék
            </a>{" "}
            Retrieved 2024.03.02
          </li>
        </StyledUL>
      </BaseContentDiv>
    </Container>
  );
}
