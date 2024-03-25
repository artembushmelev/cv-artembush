import styled from "styled-components"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { SectionText } from "../../../components/SectionText"
import { SectionTitle } from "../../../components/SectionTitle"
import { Link } from "../../../components/links/Link"
import { theme } from "../../../styles/Theme"

export const Contact = () => {
    return (
        <ContactStyled id={"contact"}>
            <SectionTitle> <span>For any questions please mail me:</span></SectionTitle>
            <FlexWrapper justify={'center'} align={"center"} gap = {"20px"}>
                <Link linkId = {"githab"} width="60px" height="60px"/>
                <Link linkId = {"twitter"} width="60px" height="60px" viewBox=" 6 1 21 31"/>
                <Link linkId = {"linkid"} width="60px" height="60px"/>
            </FlexWrapper>
        </ContactStyled>
    )
}


const ContactStyled = styled.div`
    padding-top: 178px;
    align-items: center;
    padding-bottom: 200px;
    @media ${theme.media.mobile} {
        padding-top: 110px;
        padding-bottom: 100px;
  }
`