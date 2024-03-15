import styled from "styled-components";
import { Logo } from "../../../components/logo/Logo";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionText } from "../../../components/SectionText";
import { Links } from "../../../components/links/Link";

export const SectionFooter = () => {
  return (
    <SectionFooterStyled>
      <Logo />
      <FlexWrapper  gap={"48px"} justify={"space-between"}>
      <FlexWrapper gap={"33px"}>
        <SectionText fontsize={"18px"}>+7-912-460-**-**</SectionText>
        <SectionText fontsize={"18px"}>bushmelevfront@gmail.com</SectionText>
      </FlexWrapper>
      <FlexWrapper gap={"20px"}>
        <Links linkId={"githab"} />
        <Links linkId={"twitter"} />
        <Links linkId={"linkid"} />
      </FlexWrapper>
      </FlexWrapper>
    </SectionFooterStyled>
  );
};

const SectionFooterStyled = styled.div`
  background-color: red;
  display: flex;
  justify-content: space-between;
`;
