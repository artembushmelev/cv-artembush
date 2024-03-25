import styled from "styled-components";
import { theme } from "../../../styles/Theme";
import { Link } from "react-scroll";

export const Menu = (props: {
  menuItems: Array<{ title: string; href: string }>;
}) => {
  return (
    <StyledMenu>
      <ul>
        {props.menuItems.map((item, index) => {
          return (
            <li key={index}>
              <NavLink smooth={true} to={item.href}>
                {item.title}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </StyledMenu>
  );
};

const StyledMenu = styled.nav`
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

  @media ${theme.media.tablet} {
    display: none;
  }
`;

export const NavLink = styled(Link)`
  cursor: pointer;
`;
