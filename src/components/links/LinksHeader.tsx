import styled from "styled-components"
import { FlexWrapper } from "../FlexWrapper"
import { Link } from "./Link"
import { theme } from "../../styles/Theme"


export const LinksHeader = () => {
    return (
    <LinksHeaderStyled >
        <Link linkId={"githab"} />
        <Link linkId={"twitter"} viewBox=" 6 1 21 31" />
        <Link linkId={"linkid"} />
    </LinksHeaderStyled>
    )
}

const LinksHeaderStyled = styled.div`
    display:flex;
    gap: 20px;

    @media ${theme.media.tablet} {
    display: none;
  }
`