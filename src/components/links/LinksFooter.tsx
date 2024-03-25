import styled from "styled-components"
import { FlexWrapper } from "../FlexWrapper"
import { Link } from "./Link"
import { theme } from "../../styles/Theme"


export const LinksFooter = () => {
    return (
    <LinksFooterStyled >
        <Link linkId={"githab"} />
        <Link linkId={"twitter"} viewBox=" 6 1 21 31" />
        <Link linkId={"linkid"} />
    </LinksFooterStyled>
    )
}

const LinksFooterStyled = styled.div`
    display:flex;
    gap: 20px;
    display: none;

  @media ${theme.media.tablet} {
    display: inline-flex;
  }
`