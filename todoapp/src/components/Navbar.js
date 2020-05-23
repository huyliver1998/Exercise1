import React from "react";
import styled from "styled-components";


const Navbar = () => {
  return (
    <Wrapper>
      <Brand>Todolist</Brand>;
      <NavList>
        <Item waring>Trash</Item>
        <Item>Logout</Item>
      </NavList>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  padding: 20px 0;
  margin: 0 20px;
`;

const Brand = styled.a`
text-decoration: none;
font-size: 2.5rem;
line-height: 3rem;
color: #FCB500;
background: transparent;
cursor : pointer;
&:hover{
    opacity: 0.8;
}
`;
const NavList = styled.ul`
list-style-type: none;
display: flex;
align-items: center;
font-size: 1.5rem;
line-height: 1.2rem;
background: transparent;
margin-left: auto;
`;
const Item = styled.li`
  color: ${(props) => (props.waring ? "red" : "#fcb500")};
  margin-left: 3rem;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export default Navbar;
