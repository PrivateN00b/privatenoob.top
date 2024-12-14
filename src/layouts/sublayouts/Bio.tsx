import styled, { keyframes } from "styled-components";
import BaseContentDiv from "../../components/ui/BaseContentDiv";
import { BaseProps } from "../../utils/interfaces";
import { NavLink } from "react-router-dom";
import socialLinks from "../../utils/socialLinks";
import { rgba } from "polished";

const avatarAnimation = keyframes`   
  from {
    transform: scale(1.0)
  }
  to {
    transform: scale(1.03)
  }
`;

const AvatarCard = styled.div`
  color: ${(props) => props.theme.colors.primary};
  background-color: ${(props) => rgba(props.theme.colors.bg, 0.9)};
  display: grid;
  max-width: 200px;
  margin: 10px auto 0px auto;
  border-radius: 20% 20% 0% 0%;
  border: double;

  &:hover {
    cursor: pointer;
    animation: ${avatarAnimation} 0.4s forwards;
  }

  @media (max-width: 1140px) {
    margin: 0px auto 0px auto;
    border-radius: 20px 20px 0% 0%;
  }
`;

const AvatarImg = styled.img`
  max-height: 100%;
  max-width: 100%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  border-radius: inherit;
  object-fit: cover;
`;

const BioInfo = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.text2};
  background-color: ${({ theme }) => theme.colors.primary};
  max-width: 200px;
  margin: 5px auto 0px auto;
  border: double ${({ theme }) => theme.colors.primary};
  border-radius: 0 0 50px 50px;
  box-shadow: 0 5px 0 ${(props) => props.theme.colors.text1};
  transition: all 0.2 ease;
  text-decoration: none;

  h4 {
    color: ${({ theme }) => theme.colors.text1};
  }

  &:hover {
    box-shadow: 0 3px 0 ${(props) => props.theme.colors.text1};
    transform: translateY(2px);
  }

  &:active {
    box-shadow: none;
    transform: translateY(5px);
  }

  @media (max-width: 900px) {
    margin: 5px auto 10px auto;
  }
`;

const OnlineIndicator = styled.span`
  height: 20px;
  width: 20px;
  background-color: #7fff00;
  border-radius: 50%;
  margin-right: 8px;
`;

// const OfflineIndicator = styled.span`
//   height: 20px;
//   width: 20px;
//   background-color: #dc143c;
//   border-radius: 50%;
//   margin-right: 8px;
// `;

const BioList = styled.div`
  text-align: center;
`;

function Bio({ isLast = false }: BaseProps) {
  return (
    <BaseContentDiv isLast={isLast}>
      <div>
        <AvatarCard>
          <AvatarImg
            src="https://i.pinimg.com/564x/37/88/17/3788172348dca4cda1a19d8d131e9167.jpg"
            onClick={() =>
              window.open(
                "https://i.pinimg.com/564x/37/88/17/3788172348dca4cda1a19d8d131e9167.jpg"
              )
            }
            alt="Avatar"
          />
          {/* <OnlineIndicator /> */}
        </AvatarCard>
        <BioInfo to={socialLinks.discord.url}>
          <OnlineIndicator />
          <h4>PrivateNoob</h4>
        </BioInfo>
      </div>
      <BioList>
        <h3>♂️ 23, he/him</h3>
        <h3>🇭🇺 Hungarian</h3>
        <h3>Idunno</h3>
      </BioList>
    </BaseContentDiv>
  );
}

export default Bio;
