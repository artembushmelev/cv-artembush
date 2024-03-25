import logotip from '../../assets/images/logo-1.svg'
import logotipNew from '../../assets/images/logo.svg'
import styled from 'styled-components';
import { FlexWrapper } from '../FlexWrapper';
import { animateScroll as scroll } from 'react-scroll';

const StyledLogo = styled.img`
  width: 97px;
  height: 59px;
  // Другие стили, которые вам требуются
`;

export const Logotip = () => {
    return (
    <StyledLogotip>
        <a onClick={ () => {scroll.scrollToTop()}}>
            <StyledLogo src={logotip} alt="Логотип" />
        </a>
    </StyledLogotip>
    )
}

const StyledLogotip = styled.div`
    align-items: center;
    margin-bottom:20px;
    `