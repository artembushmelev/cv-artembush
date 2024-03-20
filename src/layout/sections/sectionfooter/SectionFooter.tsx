import styled from "styled-components";
import { Logo } from "../../../components/logo/Logo";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionText } from "../../../components/SectionText";
import { Links } from "../../../components/links/Link";
import { Container } from "../../../components/Container";
import { Logotip } from "../../../components/LogoStyled/Logotip";

export const SectionFooter = () => {
  return (
    <SectionFooterStyled>
      <Container>
        <FlexWrapper  justify="space-between">
              <Logotip />
                <FlexWrapper  gap={"48px"} justify={"space-between"} align="center" >
                  <FlexWrapper gap={"33px"}>
                    <SectionText paddingB="53px" fontsize={"18px"}>+7-912-460-**-**</SectionText>
                    {/* <SectionText paddingB="53px" fontsize={"18px"}>bushmelevfront@gmail.com</SectionText> */}
                    <LinkMail href="#">bushmelevfront@gmail.com</LinkMail>
                  </FlexWrapper>
                <FlexWrapper gap={"20px"}>
                    <Links linkId={"githab"} />
                    <Links linkId={"twitter"} viewBox=" 6 1 21 31" />
                    <Links linkId={"linkid"} />
                </FlexWrapper>
              </FlexWrapper>
        </FlexWrapper>
      </Container>
    </SectionFooterStyled>
  );
};

const SectionFooterStyled = styled.div`
  display: flex;
  justify-content: space-between;
  ${Container}{
    position: relative;
    &::before {
    content: "";
    position:absolute;
    align-self: flex-end;
    left: 0;
    top: 0;
    right:0;
    bottom:0;
    max-width: 1170px;
    height: 5.68px;
    border: 2px solid rgb(66, 68, 110);
    opacity: 0.3;
    }
  }
  `


const LinkMail = styled.a`
  text-decoration:none;
  padding-bottom: 53px;
  font-size: 18px;
  text-align:center;
  color: #A7A7A7;
  font-family: "Poppins",sans-serif;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: 0px;
  transition: color 0.3s;
  &:hover {
    color: #e7e7e7;
  }
`
