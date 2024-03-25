import styled, { css } from "styled-components";
import { theme } from "../../../styles/Theme";
import { LinksMobile } from "../../../components/links/LinksMobile";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { useState } from "react";
import { NavLink } from "../menu/Menu";

export const MobileMenu = (props: { menuItems: Array<{ title: string, href: string }> }) => {
  const [menuIsOpen, setmenuIsOpen] = useState(false);
  const onBurgerBtnClick = () => { setmenuIsOpen(!menuIsOpen)}

  const closeMenu = () => {
    setmenuIsOpen(false);
  };
  
  return (
    <StyledMobileMenu>
      <BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
          <span></span>
      </BurgerButton>
            <MobileMenuPopup isOpen={menuIsOpen} onClick={ () => {setmenuIsOpen(false)}}>
                <ul>
                      {props.menuItems.map((item, index) => {
                      return (
                          <li key={index}>
                              <NavLink onClick={closeMenu} smooth={true} to={item.href}>{item.title}</NavLink>
                          </li>
                      )
                      })}
                </ul>
                <LinksMobile/>
        </MobileMenuPopup>          
    </StyledMobileMenu>
  );
};

const StyledMobileMenu = styled.nav`
  display: none;

  @media ${theme.media.tablet} {
    display: block;
  }

  a {
    text-decoration: none;
    color: #a7a7a7;
    transition: color 0.3s;
  }
  a:hover {
    color: #e7e7e7; /* Цвет ссылки при наведении */
  }

  ul {
    display: flex;
    gap: 50px;
    list-style-type: none;
  }

  

`;


const BurgerButton = styled.button<{isOpen:boolean}>`
  position: fixed;
  top: -100px;
  right: -100px;
  width: 200px;
  height: 200px;
  z-index: 999999;

  span {
      display: block;
      width: 36px;
      height: 2px;
      background-color: ${theme.color.font};
      position: absolute;
      left: 40px;
      bottom: 50px;

      ${props => props.isOpen && css<{isOpen:boolean}>`
        background-color: rgba(255,255,255,0);
      `}
    

    &::before {
      content: "";
      display: block;
      width: 36px;
      height: 2px;
      background-color: ${theme.color.font};
      position: absolute;
      transform: translateY(-10px);

      ${props => props.isOpen && css<{isOpen:boolean}>`
        transform:rotate(-45deg) translateY(0);
      `}
    }


    &::after {
      content: "";
      display: block;
      width: 24px;
      height: 2px;
      background-color: ${theme.color.font};
      position: absolute;
      transform: translateY(10px);

      ${props => props.isOpen && css<{isOpen:boolean}>`
        transform:rotate(45deg) translateY(0px);
        width: 36px;
      `}
    }
  }
  
`

const MobileMenuPopup = styled.div<{isOpen:boolean}>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99999;
  background-color:${theme.color.primaryBg};
  display: none;
  flex-direction: column;
  gap:40px;

  ${props => props.isOpen && css<{isOpen:boolean}>`
      display: flex;
      justify-content: center;
      align-items: center;
  `} 
    
  


  ul {
    display: flex;
    gap: 50px;
    list-style-type: none;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
`