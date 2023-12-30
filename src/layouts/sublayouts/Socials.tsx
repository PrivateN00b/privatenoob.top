import { Link } from "react-router-dom";
import BaseContentDiv from "../../components/ui/BaseContentDiv";
import BaseProps from "../../utils/interfaces";
import Icon from "../../components/ui/Icon";
import socialLinks from "../../utils/socialLinks";

function Socials({ isLast = false }: BaseProps) {
  return (
    <BaseContentDiv
      isLast={isLast}
      style={{
        textAlign: "center",
        padding: "0 20px 20px 20px",
      }}
    >
      <h1>Socials</h1>
      <div>
        <Link to={socialLinks.discord.url}>
          <Icon
            src={socialLinks.discord.icon}
            text={socialLinks.discord.name}
          />
        </Link>
      </div>
      <div>
        <Link to={socialLinks.lemmy.url}>
          <Icon src={socialLinks.lemmy.icon} text={socialLinks.lemmy.name} />
        </Link>
      </div>
      <div>
        <Link to={socialLinks.vrchat.url}>
          <Icon src={socialLinks.vrchat.icon} text={socialLinks.vrchat.name} />
        </Link>
      </div>
      <div>
        <Link to={socialLinks.email.url}>
          <Icon src={socialLinks.email.icon} text={socialLinks.email.name} />
        </Link>
      </div>
      <div>
        <Link to={socialLinks.linkedin.url}>
          <Icon
            src={socialLinks.linkedin.icon}
            text={socialLinks.linkedin.name}
          />
        </Link>
      </div>
    </BaseContentDiv>
  );
}

export default Socials;
