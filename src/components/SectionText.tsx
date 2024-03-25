import styled from "styled-components";
import { font } from "../styles/Common";
import { theme } from "../styles/Theme";

type SectionTextPropsType = {
    fontsize?: string,
    paddingB?:string
}

export const SectionText = styled.p<SectionTextPropsType>`
    ${font({family:'"Poppins", sans-serif', weight: 700,Fmax: 32, Fmin:20 })};
    /* font-size: ${props => props.fontsize || "32px"}; */
    text-align:center;
    color: #A7A7A7;
    /* font-family: "Poppins",sans-serif; */
    /* font-weight: 400; */
    line-height: 26px;
    letter-spacing: 0px;
    padding-bottom: ${props => props.paddingB || "147px"} ;
    span {
        font-size: ${props => props.fontsize || "32px"};
        text-align:center;
        color: #A7A7A7;
        font-family: "Poppins",sans-serif;
        font-weight: 400;
        line-height: 26px;
        letter-spacing: 0px;
        padding-bottom: ${props => props.paddingB || "147px"} ;
        background: linear-gradient(90.00deg, rgb(19, 176, 245),rgb(231, 15, 170));
        -webkit-background-clip:text;
        -webkit-text-fill-color:transparent;
    }
    a {
        ${font({family:'"Poppins", sans-serif', weight: 400,Fmax: 18, Fmin:15 })};
        /* font-size: ${props => props.fontsize || "32px"}; */
        text-align:center;
        color: #A7A7A7;
        /* font-family: "Poppins",sans-serif; */
        /* font-weight: 400; */
        line-height: 26px;
        letter-spacing: 0px;
        padding-bottom: ${props => props.paddingB || "147px"} ;
        text-decoration: none;
        }
    @media ${theme.media.tablet} {    
        
    }

`

