import styled from "styled-components";

type SectionTitlePropsType = {
    fontsize?: string
}

export const SectionTitle = styled.h2<SectionTitlePropsType>`
    font-size: ${props => props.fontsize};
    text-align:center;
    color: #CCCCCC;
;
`