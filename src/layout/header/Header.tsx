import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/menu/Menu";
import { Links } from "../../components/links/Link";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Container } from "../../components/Container";
import { theme } from "../../styles/Theme";
import { Logotip } from "../../components/LogoStyled/Logotip";

const items = ["Home", "About", "Tech Stack", "Projects", "Contact"];

export const Header = () => {
  return (
    <div>
      <StyledHeader>
        <Container>
          <FlexWrapper justify="space-between" align="center">
            <Logotip />
            <FlexWrapper gap={"51px"}>
              <Menu menuItems={items} />
              <FlexWrapper gap={"20px"}>
                <Links linkId={"githab"} />
                <Links linkId={"twitter"} viewBox=" 6 1 21 31" />
                <Links linkId={"linkid"} />
              </FlexWrapper>
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

`;
