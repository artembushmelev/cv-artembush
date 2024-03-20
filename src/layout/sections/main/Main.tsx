import styled from "styled-components";
import photo from "../../../assets/images/artem-photo.jpg";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";
import photog from "../../../assets/images/AbstractNew.png"

export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <FlexWrapper align={"center"} justify={"space-between"}>
          <div>
            <SmallText>Hi 👋,</SmallText>
            <SmallText>My name is</SmallText>
            <Name>Artem Bushmelev</Name>
            <MainTitle>A Front-End Dev.</MainTitle>
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
  
`;

const FhotoWrapper = styled.div`
  position:relative;
  /* transform: rotate(-180.00deg); */

  &::before {
    position: absolute;
    content: "";
    background-image: url('${photog}');
    /* Abstract */
    width: 627.91px;
    height: 627.91px;
    left:-140px;
    top: -146px;
    transform: rotate(15.00deg);
    box-sizing: border-box;
    opacity: 0.25;
      }
`




const Photo = styled.img`
  width: 349px;
  height: 340px;
  object-fit: cover;
  border-radius: 50%;
  overflow: hidden;
  border: 5px solid rgb(231, 15, 170);
`;

const MainTitle = styled.h1`
  font-family: "Poppins", "sans-serif";
  font-size: 58px;
  font-weight: 700;
  line-height: 70px;
  letter-spacing: -1px;
  text-align: left;
`

const Name = styled.h2`
  background: linear-gradient(90.00deg, rgb(19, 176, 245),rgb(231, 15, 170));
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
  background-clip:text;
  text-fill-color:transparent;
  font-family: "Poppins", "sans-serif";
  font-size: 58px;
  font-weight: 700;
  line-height: 70px;
  letter-spacing: -1px;
  text-align: left;
`

const SmallText= styled.p`
  font-family: "Poppins", "sans-serif";
  font-size: 58px;
  font-weight: 700;
  line-height: 70px;
  letter-spacing: -1px;
  text-align: left;
`
