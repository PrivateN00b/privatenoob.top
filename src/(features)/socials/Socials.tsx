import { BaseContentDiv } from "../../components/div/BaseContentDiv";
import { BaseContentDivProps } from "../../utils/interfaces";
import Icon from "../../components/text/Icon";
import socialLinks from "../../utils/socialLinks";
import { CenteredH2 } from "../../components/text/CenteredHeaders";

function Socials({ $isLastBottom = false }: BaseContentDivProps) {
  return (
    <BaseContentDiv
      $isLastBottom={$isLastBottom}
      style={{
        textAlign: "center",
        paddingBottom: "20px",
      }}
    >
      <CenteredH2>Socials</CenteredH2>
      <div>
        <a href={socialLinks.discord.url}>
          <Icon
            src={socialLinks.discord.icon}
            text={socialLinks.discord.name}
            alt=""
          />
        </a>
      </div>
      <div>
        <a href={socialLinks.lemmy.url}>
          <Icon 
            src={socialLinks.lemmy.icon}
            text={socialLinks.lemmy.name} 
            alt=""
            />
        </a>
      </div>
      <div>
        <a href={socialLinks.vrchat.url}>
          <Icon 
            src={socialLinks.vrchat.icon}
            text={socialLinks.vrchat.name}
            alt=""
            />
        </a>
      </div>
      <div>
        <a href={socialLinks.email.url}>
          <Icon
            src={socialLinks.email.icon}
            text={socialLinks.email.name}
            alt=""
            />
        </a>
      </div>
      <div>
        <a href={socialLinks.github.url}>
          <Icon
            src={socialLinks.github.icon}
            text={socialLinks.github.name}
            alt=""
            />
        </a>
      </div>
      <div>
        <a href={socialLinks.linkedin.url}>
          <Icon
            src={socialLinks.linkedin.icon}
            text={socialLinks.linkedin.name}
            alt=""
          />
        </a>
      </div>
    </BaseContentDiv>
  );
}

export default Socials;
