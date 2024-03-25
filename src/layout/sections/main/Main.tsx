import styled from "styled-components";
import photo from "../../../assets/images/artem-photo.jpg";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";
import photog from "../../../assets/images/AbstractNew.png";
import { font } from "../../../styles/Common";
import Typewriter from "typewriter-effect";

export const Main = () => {
  return (
    <StyledMain id="home">
      <Container>
        <FlexWrapper align={"center"} justify={"space-between"} wrap={"wrap"}>
          <div>
            <SmallText>Hi 👋,</SmallText>
            <SmallText>My name is</SmallText>
            <Name>Artem Bushmelev</Name>
            {/* <MainTitle>A Front-End Dev.</MainTitle> */}
            <MainTitle>
              <Typewriter
                options={{
                  strings: ["A Software Engineer","A Front-End Dev."],
                  autoStart: true,
                  loop: true,
                }}
              />
            </MainTitle>
          </div>
          <FhotoWrapper>
            <Photo src={photo} alt="" />
          </FhotoWrapper>
        </FlexWrapper>
      </Container>
    </StyledMain>
  );
};

const StyledMain = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  @media ${theme.media.tablet} {
    min-height: 70vh;
  }
  ${FlexWrapper} {
    @media ${theme.media.mobile} {
      justify-content: center;
    }
  }
`;

const FhotoWrapper = styled.div`
  position: relative;
  /* transform: rotate(-180.00deg); */

  &::before {
    position: absolute;
    content: "";
    background-image: url("${photog}");
    /* Abstract */
    width: 627.91px;
    height: 627.91px;
    left: -140px;
    top: -146px;
    transform: rotate(15deg);
    box-sizing: border-box;
    opacity: 0.25;
    @media ${theme.media.tablet} {
      display: none;
    }
  }
`;

const Photo = styled.img`
  width: 349px;
  height: 340px;
  object-fit: cover;
  border-radius: 50%;
  overflow: hidden;
  border: 5px solid rgb(231, 15, 170);

  @media ${theme.media.tablet} {
    width: 289px;
    height: 280px;
    margin-top: 90px;
  }
`;

const MainTitle = styled.h1`
  ${font({ family: '"Poppins", sans-serif', weight: 700, Fmax: 58, Fmin: 36 })};
  /* font-family: "Poppins", "sans-serif";
  font-size: 58px;
  font-weight: 700; */
  line-height: 70px;
  letter-spacing: -1px;
  text-align: left;
  @media ${theme.media.mobile} {
    text-align: center;
  }
`;

const Name = styled.h2`
  ${font({ family: '"Poppins", sans-serif', weight: 700, Fmax: 58, Fmin: 36 })};
  background: linear-gradient(90deg, rgb(19, 176, 245), rgb(231, 15, 170));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  /* font-family: "Poppins", "sans-serif";
  font-size: 58px;
  font-weight: 700; */
  line-height: 70px;
  letter-spacing: -1px;
  text-align: left;
  @media ${theme.media.mobile} {
    text-align: center;
  }
`;

const SmallText = styled.p`
  ${font({ family: '"Poppins", sans-serif', weight: 700, Fmax: 58, Fmin: 36 })};
  line-height: 70px;
  letter-spacing: -1px;
  text-align: left;
  @media ${theme.media.mobile} {
    text-align: center;
  }
`;
