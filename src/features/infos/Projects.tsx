import BlockList from "../../components/block-list/BlockList";
import BlockListDiv from "../../components/block-list/BlockListDiv";
import CenteredH1 from "../../components/text/CenteredH1";
import Container from "../../components/div/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import BaseContentDiv from "../../components/div/BaseContentDiv";
import BlockTitle from "../../components/block-list/BlockTitle";

function Projects() {
  return (
    <Container>
      <BaseContentDiv $isLastBottom={true}>
        <CenteredH1>Some projects :3</CenteredH1>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
          }}
        >
          <BlockListDiv>
            <BlockTitle>🌐 User contract handler site</BlockTitle>
            <BlockList>
              <li>
                <strong>Features:</strong> add/edit/delete contracts,
                login/register, social login, user permissions, deployed to
                Azure
              </li>
              <li>
                <strong>Tech:</strong> C#/.NET, HTML, Blazor, Azure
              </li>
              <li>Made with a team of 3 in uni</li>
              <li>
                <a href="https://github.com/NoobKozlegeny/G1WRGM_SOF_2022231">
                  I'm on Github! <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
            </BlockList>
          </BlockListDiv>

          <BlockListDiv>
            <BlockTitle>🎮 2D game in WPF</BlockTitle>
            <BlockList>
              <li>A pretty basic platformer game</li>
              <li>
                <strong>Tech:</strong> C#/.NET, XAML
              </li>
              <li>Made with a partner in uni</li>
              <li>
                <a href="https://github.com/NoobKozlegeny/GUI_20212202_G1WRGM">
                  I'm on Github! <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
            </BlockList>
          </BlockListDiv>

          <BlockListDiv>
            <BlockTitle>🤖📱 Measuring biking intensitivity</BlockTitle>
            <BlockList>
              <li>
                A running app in your pocket will decide if you biked
                slowly/normally/intensively in every 30/60 second time period
              </li>
              <li>
                <strong>Tech:</strong> Java/Kotlin, Python, Tensorflow, XML
              </li>
              <li>This is my thesis 📄</li>
              <li>
                <a href="https://github.com/NoobKozlegeny/SensorCollector">
                  The App! <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
              <li>
                <a href="https://github.com/NoobKozlegeny/my-deeplearning-models/blob/main/Szakdoga.ipynb">
                  The AI model! <FontAwesomeIcon icon={faGithub} />
                </a>{" "}
                (this one won't take your job :3)
              </li>
            </BlockList>
          </BlockListDiv>

          <BlockListDiv>
            <BlockTitle>🌐 This site ^^</BlockTitle>
            <BlockList>
              <li>A personal site with some quirky elements</li>
              <li>
                <strong>Tech:</strong> React, Typescript, HTML, CSS
              </li>
              <li>
                <a href="https://github.com/NoobKozlegeny/privatenoob.top">
                  I'm on Github! <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
            </BlockList>
          </BlockListDiv>
        </div>
      </BaseContentDiv>
    </Container>
  );
}

export default Projects;
