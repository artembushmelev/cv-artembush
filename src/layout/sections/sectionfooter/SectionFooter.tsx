import styled from "styled-components";
import { Logo } from "../../../components/logo/Logo";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionText } from "../../../components/SectionText";
import { Link } from "../../../components/links/Link";
import { Container } from "../../../components/Container";
import { Logotip } from "../../../components/LogoStyled/Logotip";
import { LinksHeader } from "../../../components/links/LinksHeader";
import { LinksFooter } from "../../../components/links/LinksFooter";
import { theme } from "../../../styles/Theme";

export const SectionFooter = () => {
  return (
    <SectionFooterStyled id="about">
      <Container>
        <FlexWrapper justify="space-between" wrap="wrap" align="center">
          <Logotip />
          <FlexWrapper gap={"48px"} justify={"space-between"} wrap="wrap">
            <FlexWrapper gap={"33px"} align={"center"}>
              <SectionText paddingB="-2px" fontsize={"18px"}>
                <a href="#">+7-912-460-**-**</a>
              </SectionText>
              <LinkMail href="#">bushmelevfront@gmail.com</LinkMail>
            </FlexWrapper>
            <LinksHeader />
          </FlexWrapper>
        </FlexWrapper>
      </Container>
    </SectionFooterStyled>
  );
};

const SectionFooterStyled = styled.div`
  display: flex;
  justify-content: space-between;

  ${Container} {
    position: relative;
    &::before {
      content: "";
      position: absolute;
      align-self: flex-end;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      max-width: 1170px;
      height: 5.68px;
      border: 2px solid rgb(66, 68, 110);
      opacity: 0.3;
    }
  }
  @media ${theme.media.tablet} {
    flex-direction: column;
    flex-wrap: wrap;
  }
  ${FlexWrapper} {
    @media ${theme.media.mobile} {
      flex-direction: column;
      align-items: center;
      gap: 20px;
    }
  }
`;

const LinkMail = styled.a`
  text-decoration: none;
  /* padding-bottom: 53px; */
  font-size: 18px;
  text-align: center;
  color: #a7a7a7;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: 0px;
  transition: color 0.3s;
  &:hover {
    color: #e7e7e7;
  }
  @media ${theme.media.mobile} {
      padding-bottom: 30px;
    }
`;
