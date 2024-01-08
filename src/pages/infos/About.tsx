import BlockList from "../../components/styled-components/block-list/BlockList";
import BlockListDiv from "../../components/styled-components/block-list/BlockListDiv";
import CenteredH1 from "../../components/ui/CenteredH1";
import CenteredH2 from "../../components/ui/CenteredH2";
import Container from "../../components/ui/Container";
import LeftSideDiv from "../../components/ui/LeftSideDiv";
import MainDiv from "../../components/ui/MainDiv";
import StyledParagraph from "../../components/ui/StyledParagraph";
import Bio from "../../layouts/sublayouts/Bio";
import MusicPlayer from "../../layouts/sublayouts/MusicPlayer";
import Socials from "../../layouts/sublayouts/Socials";

function About() {
  return (
    <Container>
      <LeftSideDiv>
        <Bio />
        <Socials isLast={true} />
        <MusicPlayer />
      </LeftSideDiv>
      <MainDiv>
        <CenteredH1>Introduction</CenteredH1>
        <StyledParagraph>
          Yooo! My username is PrivateNoob, but some people may know me as Kacsa
          ^^. I'm your (mostly) usual guy whose main personality pieces were
          developed by the magical (and insanely chaotic) internet :3.
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
            <p>Practical interests</p>
            <BlockList>
              <li>Programming</li>
              <li>Biking</li>
              <li>Any sports with friends</li>
              <li>Cooking</li>
            </BlockList>
          </BlockListDiv>

          <BlockListDiv>
            <p>Favorite games</p>
            <BlockList>
              <li>Danganronpa</li>
              <li>NFS: Most Wanted 2005</li>
              <li>Cities: Skylines</li>
            </BlockList>
          </BlockListDiv>
        </div>
      </MainDiv>
    </Container>
  );
}

export default About;
