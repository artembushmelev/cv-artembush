import styled from "styled-components";
import photo from "../../../assets/images/artem-photo.jpg";
import { FlexWrapper } from "../../../components/FlexWrapper";

export const Main = () => {
  return (
    <StyledMain>
      <FlexWrapper align={"center"} justify={"space-around"}>
        <div>
          <span>Hi 👋,</span>
          <p>My name is</p>
          <Name>Artem Bushmelev</Name>
          <MainTitle>A Front-End Dev.</MainTitle>
        </div>
        <Photo src={photo} alt="" />
      </FlexWrapper>
    </StyledMain>
  );
};

const StyledMain = styled.div`
  min-height: 100vh;
  background-color: #909092;
`;




const Photo = styled.img`
  width: 349px;
  height: 340px;
  object-fit: cover;
  border-radius: 50%;
  overflow: hidden;
  border: 5px solid rgb(231, 15, 170);
`;

const MainTitle = styled.h1`
    
`

const Name = styled.h2`
    
`
