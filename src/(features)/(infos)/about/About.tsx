import BlockList from "../../../components/block-list/BlockList";
import BlockListDiv from "../../../components/block-list/BlockListDiv";
import BlockTitle from "../../../components/block-list/BlockTitle";
import { CenteredH1 } from "../../../components/text/CenteredHeaders";
import Container from "../../../components/div/Container";
import StyledParagraph from "../../../components/text/StyledParagraph";
import Bio from "../../bio/Bio";
import Socials from "../../socials/Socials";
import LeftSideDiv from "../../../components/div/LeftSideDiv";
import MainDiv from "../../../components/div/MainDiv";
import { BaseContentDiv } from "../../../components/div/BaseContentDiv";

function About() {
  return (
    <Container>
      <meta name="description" content="Introduction of the privatenoob.top author" />
      <meta name="keywords" content="about, introduction, hobby" />
      <LeftSideDiv>
        <Bio />
        <Socials $isLastBottom={true} />
      </LeftSideDiv>
      <MainDiv>
        <BaseContentDiv $isLastBottom={true}>
          <CenteredH1>Introduction</CenteredH1>
          <StyledParagraph>
            Yooo! My username is PrivateNoob, but some people may know me as Kacsa
            ^^. My name is just a simple combination of "Saving Private Ryan" and
            being a noob at FPS games. I'm your (mostly) usual guy whose main
            personality pieces were developed by the magical (and insanely
            chaotic) internet :3.
          </StyledParagraph>
          <br />
          <StyledParagraph>
            This "personal website" idea was always floating around in my silly
            brain, but I was never satisfied with the initial design attempts made
            back years ago, but the renaissance of Geocities in the name of
            Neocities sparked the desire to represent the Old Internet's will and
            personality in some way atleast (I use React).
          </StyledParagraph>
          <CenteredH1>Interests & Skills</CenteredH1>
          <StyledParagraph>
            I have some hobbies & interests, but I hope to expand upon these,
            since it's not much currently (not the practical ones atleast).
          </StyledParagraph>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <BlockListDiv>
              <BlockTitle>🚴‍♂️ Hobbies</BlockTitle>
              <BlockList>
                <li>Programming</li>
                <li>Biking</li>
                <li>Any sports with friends</li>
                <li>Cooking</li>
              </BlockList>
            </BlockListDiv>

            <BlockListDiv>
              <BlockTitle>🎮 Games</BlockTitle>
              <BlockList>
                <li>Danganronpa</li>
                <li>NFS: Most Wanted 2005</li>
                <li>Cities: Skylines</li>
                <li>This War of Mine</li>
              </BlockList>
            </BlockListDiv>

            <BlockListDiv>
              <BlockTitle>🍿 Shows/Movies</BlockTitle>
              <BlockList>
                <li>Silent Voice</li>
                <li>Erased</li>
                <li>Interstellar</li>
                <li>Oppenheimer</li>
              </BlockList>
            </BlockListDiv>

            <BlockListDiv>
              <BlockTitle>📕 Books</BlockTitle>
              <BlockList>
                <li>Flowers for Algernon</li>
                <li>1984</li>
                <li>Lassie</li>
              </BlockList>
            </BlockListDiv>
          </div>
        </BaseContentDiv>
      </MainDiv>
    </Container>
  );
}

export default About;
