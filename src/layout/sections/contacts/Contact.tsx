import styled from "styled-components"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { SectionText } from "../../../components/SectionText"
import { SectionTitle } from "../../../components/SectionTitle"
import { Links } from "../../../components/links/Link"

export const Contact = () => {
    return (
        <ContactStyled>
            <SectionTitle>For any questions please mail me:</SectionTitle>
            <FlexWrapper justify={'center'} align={"center"} gap = {"20px"}>
                <Links linkId = {"githab"}/>
                <Links linkId = {"twitter"} viewBox=" 6 1 21 31"/>
                <Links linkId = {"linkid"}/>
            </FlexWrapper>
        </ContactStyled>
    )
}


const ContactStyled = styled.div`
    align-items: center;
`