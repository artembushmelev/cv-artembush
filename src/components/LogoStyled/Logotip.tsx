import logotip from '../../assets/images/logo-1.svg'
import styled from 'styled-components';

const StyledLogo = styled.img`
  width: 97px;
  height: 59px;
  // Другие стили, которые вам требуются
`;

export const Logotip = () => {
    return (
        <a href="">
            <StyledLogo src={logotip} alt="Логотип" />
        </a>
    )
}