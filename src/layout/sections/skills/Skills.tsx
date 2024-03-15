import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Icon } from "../../../components/icon/Icon";
import { SectionTitle } from "../../../components/SectionTitle";
import { SectionText } from "../../../components/SectionText";

export const Skills = () => {
  return (
    <StyledSkills>
      <SectionTitle>My Tech Stack</SectionTitle>
      <SectionText> Technologies I’ve been working with recently</SectionText>
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
    </StyledSkills>
  );
};

const StyledSkills = styled.section`
    background-color: #4b484d;
`

const Skill = styled.section`
    display: flex;
    gap: 105px;
    flex-wrap: wrap;
`
