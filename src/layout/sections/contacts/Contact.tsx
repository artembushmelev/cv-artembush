import styled from "styled-components"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { SectionText } from "../../../components/SectionText"
import { SectionTitle } from "../../../components/SectionTitle"
import { Links } from "../../../components/links/Link"

export const Contact = () => {
    return (
        <ContactStyled>
            <SectionTitle> <span>For any questions please mail me:</span></SectionTitle>
            <FlexWrapper justify={'center'} align={"center"} gap = {"20px"}>
                <Links linkId = {"githab"} width="60px" height="60px"/>
                <Links linkId = {"twitter"} width="60px" height="60px" viewBox=" 6 1 21 31"/>
                <Links linkId = {"linkid"} width="60px" height="60px"/>
            </FlexWrapper>
        </ContactStyled>
    )
}


const ContactStyled = styled.div`
    padding-top: 178px;
    align-items: center;
    padding-bottom: 200px;
`