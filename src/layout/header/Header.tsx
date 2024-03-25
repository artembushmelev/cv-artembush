import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Menu } from "./menu/Menu";
import { Link, } from "../../components/links/Link";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Container } from "../../components/Container";
import { theme } from "../../styles/Theme";
import { Logotip } from "../../components/LogoStyled/Logotip";
import { LinksHeader } from "../../components/links/LinksHeader";
import { MobileMenu } from "./MobileMenu/MobileMenu";

// const items = ["Home", "About", "Tech Stack", "Projects", "Contact"];

const items = [
  {
    title: "Home",
    href: "home"
  },
  {
    title: "About",
    href: "about"
  },
  {
    title: "Tech Stack",
    href: "tech Stack"
  },
  {
    title: "Projects",
    href: "projects"
  },
  {
    title: "Contact",
    href: "contact"
  },
]


export const Header = () => {
  return (
    <div>
      <StyledHeader id="">
        <Container>
          <FlexWrapper justify="space-between" align="center">
            <Logotip />
            <FlexWrapper gap={"51px"}>
              <Menu menuItems={items} />
              <LinksHeader/>
              <MobileMenu menuItems={items}/>
              {/* <FlexWrapper gap={"20px"}>
                <Link linkId={"githab"} />
                <Link linkId={"twitter"} viewBox=" 6 1 21 31" />
                <Link linkId={"linkid"} />
              </FlexWrapper> */}
            </FlexWrapper>
          </FlexWrapper>
        </Container>
      </StyledHeader>
    </div>
  );
};

const StyledHeader = styled.header`
margin-top: 30px;
background-color: ${theme.color.primaryBg};
position:fixed;
top: 0;
left: 0;
right: 0;
z-index: 9999;
@media ${theme.media.tablet} {
    position:static;
  }
`