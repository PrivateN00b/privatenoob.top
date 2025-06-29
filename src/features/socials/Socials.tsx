import { Link } from "react-router-dom";
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
        <Link to={socialLinks.discord.url}>
          <Icon
            src={socialLinks.discord.icon}
            text={socialLinks.discord.name}
            alt=""
          />
        </Link>
      </div>
      <div>
        <Link to={socialLinks.lemmy.url}>
          <Icon 
            src={socialLinks.lemmy.icon}
            text={socialLinks.lemmy.name} 
            alt=""
            />
        </Link>
      </div>
      <div>
        <Link to={socialLinks.vrchat.url}>
          <Icon 
            src={socialLinks.vrchat.icon}
            text={socialLinks.vrchat.name}
            alt=""
            />
        </Link>
      </div>
      <div>
        <Link to={socialLinks.email.url}>
          <Icon
            src={socialLinks.email.icon}
            text={socialLinks.email.name}
            alt=""
            />
        </Link>
      </div>
      <div>
        <Link to={socialLinks.github.url}>
          <Icon
            src={socialLinks.github.icon}
            text={socialLinks.github.name}
            alt=""
            />
        </Link>
      </div>
      <div>
        <Link to={socialLinks.linkedin.url}>
          <Icon
            src={socialLinks.linkedin.icon}
            text={socialLinks.linkedin.name}
            alt=""
          />
        </Link>
      </div>
    </BaseContentDiv>
  );
}

export default Socials;
