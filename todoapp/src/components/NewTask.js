import React from "react";
import styled from "styled-components";
import { FaPlus } from "react-icons/fa";

export default (props) => {
  let textRef = React.createRef();
  let handleAddTodo =() => {
    if(textRef.current.value !== ''){
      props.addTodo(textRef.current.value);
      textRef.current.value ='';
    }
  }
  return (
    <TodoTextWrapper>
      <TodoText 
      ref={textRef}
      onKeyPress = {event => {
        if(event.key ==='Enter'){
          console.log(event.target.value );
          
          handleAddTodo(event)
        }
      }}
      onBlur ={handleAddTodo}
      />
      <AddButton onClick ={handleAddTodo}>
        <FaPlus></FaPlus>
      </AddButton>
    </TodoTextWrapper>
  );
};
const TodoTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: min(90%, 550px);
  margin: 0 auto;
`;
const TodoText = styled.input`
height: 40px;
width: min(90%, 500px);
background: #c4c4c4;
font-size: 1rem;
color : gray;
border: none;
padding : 0 4px;
`;

const AddButton = styled.button`
  background: #fcb500;
  width: 40px;
  height: 40px;
  color: blue;
  font-size: 1.2rem;
  text-transform: capitalize;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    background: transparent;
    color: #706969;
  }
  border: none;
  &:focus {
    outline: none;
  }
`;
