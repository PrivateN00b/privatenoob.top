import { Link } from "react-router-dom";
import { styled } from "styled-components";

const BaseLink = styled(Link)`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.text1};
  text-decoration: none;
  font-weight: bold;
  justify-content: center;
`;

const StyledLink = styled(BaseLink)`
  background-color: ${(props) => props.theme.colors.primary};
  padding: 10px 30px 10px 30px;
  border-radius: 20px;
  max-height: 22px;
  box-shadow: 0 5px 0 ${(props) => props.theme.colors.text1};
  transition: all 0.2 ease;
  line-height: 1;
  margin: 20px 30px 20px 20px;  // Increase navbar height by 40px

  &:hover {
    box-shadow: 0 3px 0 ${(props) => props.theme.colors.text1};
    transform: translateY(2px);
  }

  &:active {
    box-shadow: none;
    transform: translateY(5px);
  }

  @media (max-width: 420px) {
    padding: 10px 20px 10px 20px;
  }
`;

const DropDownLink = styled(BaseLink)`
  padding: 5px 30px 5px 30px;
  border-radius: 10px;
  margin-top: 10px;
  outline-style: outset;
  outline-color: ${(props) => props.theme.colors.primary};
`;

interface NavbarLinkProps {
  to: string;
  component: string;
  children?: React.ReactNode;
}

export default function NavbarLink({
  to,
  component,
  children,
}: NavbarLinkProps) {
  {
    console.log("IN NAVBARLINK")
    if (component.toLowerCase() == "dropdown")
      return <DropDownLink to={to}>{children}</DropDownLink>;
    else if (component.toLowerCase() == "normal")
      return <StyledLink to={to}>{children}</StyledLink>;
  }
}
