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
            <Title>{props.title}</Title>
            <Text>{props.text}</Text>
            <TechText>{props.techtext}</TechText>
            <FlexWrapper gap={"48px"}>
                <LinkProject title = {"Live Preview"} IconId={"link"} width={"20px"} height={"20px"} viewBox="0 -5  15 25"/>
                <LinkProject title = {"View Code"} IconId={"githab"} width={"20px"} height={"20px"}/>
            </FlexWrapper>
        </FlexWrapper>
    </StyledWork>
    )
}

const StyledWork = styled.div`
   background-color: ${theme.color.secondaryBg};
   max-width: 373px;
   width:100%;

`
const Image = styled.img`
    width:100%;
    height: 260px;
    object-fit: cover;
`

const Title = styled.h3`
    
`
const Text = styled.p`
    
`
const TechText = styled.p`
    
`


