import styled from "styled-components";

type SectionTitlePropsType = {
    fontsize?: string
}

export const SectionTitle = styled.h2<SectionTitlePropsType>`
    font-size: ${props => props.fontsize || "48px"};
    text-align:center;
    color: #CCCCCC;
    font-family: "Poppins" , sans-serif;
    font-weight: 700;
    line-height: 26px;
    letter-spacing: 0px;
    text-align: center;
    padding-bottom: 49px;
    span {
        background: linear-gradient(90.00deg, rgb(19, 176, 245),rgb(231, 15, 170));
        -webkit-background-clip:text;
        -webkit-text-fill-color:transparent;
    }
;
`