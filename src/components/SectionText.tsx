import styled from "styled-components";

type SectionTextPropsType = {
    fontsize?: string
}

export const SectionText = styled.p<SectionTextPropsType>`
    font-size: ${props => props.fontsize};
    text-align:center;
    color: #A7A7A7;
;

;
`