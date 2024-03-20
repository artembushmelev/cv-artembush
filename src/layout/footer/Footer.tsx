import styled from "styled-components"
import { Menu } from "../../components/menu/Menu";
import { SectionText } from "../../components/SectionText";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";

const FooterItems = ["Home", "About", "Tech Stack", "Projects", "Contact"];

export const Footer = () => {
    return (
        <FooterStyled>
            <Container>
                <FlexWrapper justify="space-between">
                    <Menu menuItems = {FooterItems}/>
                    <SectionText paddingB="60px" fontsize={"18px"}><span>Designed and built by ArtemBush.</span></SectionText>
                </FlexWrapper>
            </Container>
        </FooterStyled>
    )
}

const FooterStyled = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top:50px;
`