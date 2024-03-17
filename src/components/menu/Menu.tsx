import styled from "styled-components";

export const Menu = (props: { menuItems: Array<string> }) => {
  return (
    <StyledMenu>
      <ul>
            {props.menuItems.map((item, index) => {
            return (
                <li key={index}>
                    <a href="">{item}</a>
                </li>
            )
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
`;
