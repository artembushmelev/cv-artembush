import styled from "styled-components";
import { font } from "../styles/Common";
import { theme } from "../styles/Theme";

type SectionTitlePropsType = {
    fontsize?: string
}

export const SectionTitle = styled.h2<SectionTitlePropsType>`
    ${font({family:'"Poppins", sans-serif', weight: 700,Fmax: 48, Fmin:36 })};
    /* font-size: ${props => props.fontsize || "48px"}; */
    text-align:center;
    color: #CCCCCC;
    /* font-family: "Poppins" , sans-serif; */
    /* font-weight: 700; */
    line-height: 26px;
    letter-spacing: 0px;
    text-align: center;
    padding-bottom: 49px;
    span {
        background: linear-gradient(90.00deg, rgb(19, 176, 245),rgb(231, 15, 170));
        -webkit-background-clip:text;
        -webkit-text-fill-color:transparent;
        @media ${theme.media.mobile} {    
        line-height: 3rem;
        
        }
    }
    @media ${theme.media.tablet} {    
        padding-bottom: 19px;
    }
;
`