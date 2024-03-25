import styled from "styled-components"
import { FlexWrapper } from "../FlexWrapper"
import { Link } from "./Link"
import { theme } from "../../styles/Theme"


export const LinksMobile = () => {
    return (
    <LinksMobileStyled >
        <Link linkId={"githab"} />
        <Link linkId={"twitter"} viewBox=" 6 1 21 31" />
        <Link linkId={"linkid"} />
    </LinksMobileStyled>
    )
}

const LinksMobileStyled = styled.div`
    display:flex;
    gap: 20px;
`