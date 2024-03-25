import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionText } from "../../../components/SectionText";
import { SectionTitle } from "../../../components/SectionTitle";
import { Project } from "./project/project";
import socialImg from "../../../assets/images/proj-1.jpg";
import socialImg2 from "../../../assets/images/proj-2.jpg";
import socialImg3 from "../../../assets/images/proj-3.jpg";
import socialImg4 from "../../../assets/images/proj-4.jpg";
import socialImg5 from "../../../assets/images/proj-5.jpg";
import socialImg6 from "../../../assets/images/proj-6.jpg";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";

export const Projects = () => {
  return (
    <StyledProjects id="projects">
      <Container>
        <SectionTitle fontsize="48px">Projects</SectionTitle>
        <SectionText  paddingB = "113px" fontsize="32px">Things I’ve built so far</SectionText>

        <FlexWrapper gap="50px 9px" wrap={"wrap"} justify={"space-between"}>
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
      </Container>
    </StyledProjects>
  );
};

const StyledProjects = styled.section`
  /* min-height: 100vh; */
  padding-top: 201px;
  @media ${theme.media.tablet} {
    padding-top: 100px;
  }
  
`;
