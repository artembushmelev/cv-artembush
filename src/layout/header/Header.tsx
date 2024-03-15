import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/menu/Menu";
import { Links } from "../../components/links/Link";
import { FlexWrapper } from "../../components/FlexWrapper";



const items = ["Home", "About", "Tech Stack", "Projects", "Contact"];

export const Header = () => {
  return (
    <div>
      <StyledHeader>
        <Logo/>
        <FlexWrapper gap={"51px"}>
          <Menu menuItems = {items}/>
          <FlexWrapper gap={"20px"}>
          <Links linkId = {"githab"}/>
          <Links linkId = {"twitter"}/>
          <Links linkId = {"linkid"}/>
          </FlexWrapper>
        </FlexWrapper>
      </StyledHeader>
    </div>
  );
};

const StyledHeader = styled.header`
    background-color: #eb5c28;
    display: flex;
    justify-content: space-between;
`
