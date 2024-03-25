import styled from "styled-components"
import { FlexWrapper } from "../../../../components/FlexWrapper"
import { LinkProject } from "./LinkProject"
import { theme } from "../../../../styles/Theme"





type ProjectPropsType =  {
    title:string,
    text:string,
    techtext:string
    src?:string
}

export const Project = (props:ProjectPropsType) => {
    return (
    <StyledWork>
            <FlexWrapper direction={"column"} align={"center"} >
                <Image src={props.src} alt=""/>
                <Description>
                <Title>{props.title}</Title>
                <Text>{props.text}</Text>
                <TechText>{props.techtext}</TechText>
                <FlexWrapper gap={"48px"}>
                    <LinkProject title = {"Live Preview"} IconId={"link"} width={"20px"} height={"20px"} viewBox="0 -5  15 25"/>
                    <LinkProject title = {"View Code"} IconId={"githab"} width={"20px"} height={"20px"}/>
                </FlexWrapper>
                </Description>
            </FlexWrapper>
    </StyledWork>
    )
}

const StyledWork = styled.div`
   background-color: ${theme.color.secondaryBg};
   max-width: 373px;
   border-radius: 20px;
    box-shadow: 2px 2px 100px 0px rgba(0, 0, 0, 0.2);
   width:100%;
   @media ${theme.media.tablet} {    
        margin: 0 auto;
    }

`
const Image = styled.img`
    border-radius: 20px 20px 0px 0px;   
    width:100%;
    height: 260px;
    object-fit: cover;
`

const Title = styled.h3`
    color: rgb(204, 204, 204);
    font-family: 'Poppins', sans-serif;
    font-size: 28px;
    font-weight: 500;
    line-height: 26px;
    letter-spacing: 0px;
    text-align: left;
`
const Text = styled.p`
    margin: 17px 0 12px 0;
    color: rgb(204, 204, 204);
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    font-weight: 300;
    line-height: 26px;
    letter-spacing: 0px;
    text-align: left;
    
`
const TechText = styled.p`
    color: rgb(204, 204, 204);
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-weight: 300;
    line-height: 26px;
    letter-spacing: 0px;
    text-align: left;
    padding-bottom: 21px
    
`

const Description = styled.div`
    padding:27px 30px 28px 30px
`


