import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Icon } from "../../../components/icon/Icon";
import { SectionTitle } from "../../../components/SectionTitle";
import { SectionText } from "../../../components/SectionText";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";

export const Skills = () => {
  return (
    <StyledSkills id="tech Stack">
      <Container>
      <SectionTitle fontsize="48px">My Tech Stack</SectionTitle>
      <SectionText fontsize="32px"> Technologies I’ve been working with recently</SectionText>
      <FlexWrapper wrap={"wrap"} align={"center"} >
        <Skill>
          <Icon
            iconId={"html5"}
            width="120px"
            height="120px"
            viewBox="0 0 120 120"
          />
          <Icon
            iconId={"css"}
            width="120px"
            height="120px"
            viewBox="0 0 120 120"
          />
          <Icon
            iconId={"javascript"}
            width="120px"
            height="120px"
            viewBox="0 0 120 120"
          />
          <Icon
            iconId={"react"}
            width="120px"
            height="120px"
            viewBox="0 0 120 120"
          />
          <Icon
            iconId={"redux"}
            width="120px"
            height="120px"
            viewBox="0 0 120 120"
          />
          <Icon
            iconId={"be"}
            width="120px"
            height="120px"
            viewBox="0 0 120 120"
          />
          <Icon
            iconId={"volna"}
            width="120px"
            height="120px"
            viewBox="0 0 131 131"
          />
          <Icon
            iconId={"sass"}
            width="120px"
            height="120px"
            viewBox="0 0 120 120"
          />
          <Icon
            iconId={"gitlab"}
            width="120px"
            height="120px"
            viewBox="0 0 105 105"
          />
          <Icon
            iconId={"greensock"}
            width="120px"
            height="120px"
            viewBox="0 0 120 120"
          />
          <Icon
            iconId={"vscode"}
            width="120px"
            height="120px"
            viewBox="0 0 120 120"
          />
          <Icon
            iconId={"github"}
            width="120px"
            height="120px"
            viewBox="0 0 88 88"
          />
        </Skill>
      </FlexWrapper>
      </Container>
    </StyledSkills>
  );
};

const StyledSkills = styled.div`
  padding-top: 170px;
  
`

const Skill = styled.div`
    display: flex;
    gap: 83px;
    flex-wrap: wrap;
    @media ${theme.media.tablet} {
      /* margin-left:40px; */
      justify-content: space-around;
    }
`

