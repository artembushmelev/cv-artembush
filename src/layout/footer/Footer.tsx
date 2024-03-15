import styled from "styled-components"
import { Menu } from "../../components/menu/Menu";
import { SectionText } from "../../components/SectionText";

const FooterItems = ["Home", "About", "Tech Stack", "Projects", "Contact"];

export const Footer = () => {
    return (
        <FooterStyled>
            <Menu menuItems = {FooterItems}/>
            <SectionText fontsize={"18px"}>Designed and built by ArtemBush.</SectionText>
        </FooterStyled>
    )
}

const FooterStyled = styled.div`
    background-color: #ffffff;
    display: flex;
    justify-content: space-between;
`