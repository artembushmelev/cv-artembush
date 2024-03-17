import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionText } from "../../../components/SectionText";
import { SectionTitle } from "../../../components/SectionTitle";
import { Project } from "./project/project";
import socialImg from '../../../assets/images/proj-1.jpg';
import socialImg2 from '../../../assets/images/proj-2.jpg';
import socialImg3 from '../../../assets/images/proj-3.jpg';
import socialImg4 from '../../../assets/images/proj-4.jpg';
import socialImg5 from '../../../assets/images/proj-5.jpg';
import socialImg6 from '../../../assets/images/proj-6.jpg';

export const Projects = () => {
  return (
    <StyledProjects>
      <SectionTitle>Projects</SectionTitle>
      <SectionText>Things I’ve built so far</SectionText>

      <FlexWrapper wrap={"wrap"} justify={"space-around"}>
        <Project
          src={socialImg}
          title={"Project Tile goes here"}
          text={
            "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
          }
          techtext={"Tech stack : HTML , JavaScript, SASS, React"}
        />
        <Project
          src={socialImg2}
          title={"Project Tile goes here"}
          text={
            "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
          }
          techtext={"Tech stack : HTML , JavaScript, SASS, React"}
        />
        <Project
          src={socialImg3}
          title={"Project Tile goes here"}
          text={
            "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
          }
          techtext={"Tech stack : HTML , JavaScript, SASS, React"}
        />
        <Project
          src={socialImg4}
          title={"Project Tile goes here"}
          text={
            "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
          }
          techtext={"Tech stack : HTML , JavaScript, SASS, React"}
        />
        <Project
          src={socialImg5}
          title={"Project Tile goes here"}
          text={
            "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
          }
          techtext={"Tech stack : HTML , JavaScript, SASS, React"}
        />
        <Project
          src={socialImg6}
          title={"Project Tile goes here"}
          text={
            "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
          }
          techtext={"Tech stack : HTML , JavaScript, SASS, React"}
        />
      </FlexWrapper>
    </StyledProjects>
  );
};

const StyledProjects = styled.section`
  min-height: 100vh;
`;
