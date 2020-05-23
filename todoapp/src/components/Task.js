import React, { Component } from "react";
import styled from "styled-components";
import { FaCheck, FaTrash, FaUndo } from "react-icons/fa";

export default class Task extends Component {

  state ={
    editing: false,
    textTodo:this.props.todo.title
  }
  handleDblClickTodoLabel=() =>{
    this.setState({editing: true});
  }
 
  handleCheckOrUndo = () => {
    this.props.setCompleted(this.props.todo.id);
  };
  handleDeleteTodo =() =>{
    this.props.deleteTodo(this.props.todo.id);
  };
  handleChange =() =>{
    this.setState({textTodo: this.refs.textRef.value})
  }
  handleEdit =()=>{
    this.setState({editing: false});
    if(this.refs.textRef.value !== this.props.todo.title ){
      
    }
  }
  render() {
    return (
      <TaskWrapper primary={this.props.primary}>
        {
        !this.state.editing?
        <TodoLabel onDoubleClick={this.handleDblClickTodoLabel}>{this.props.todo.title}</TodoLabel>
        :
        <TodoText
        ref='textRef'
        value={this.state.textTodo} onChange={this.handleChange}
        onBlur={this.handleBlur}
        />
        }
     
        <CustomButton onClick={this.handleCheckOrUndo}>
          {this.props.primary ? <FaCheck /> : <FaUndo />}
        </CustomButton>
        <CustomButton warning onClick={this.handleDeleteTodo}>
          <FaTrash />
        </CustomButton>
      </TaskWrapper>
    );
  }
}

const TaskWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  background: #dfdfdf;
  width: min(90%, 350px);
  min-height: 50px;
  opacity: 0.7;
  box-shadow: inset 0px 4px 4px
    ${(props) =>
      props.primary ? "rgba(252,109,109,0.4)" : "rgba(252,181,0,0.6)"};
`;
const TodoLabel = styled.label`
  width: 100%;
  max-width: 80%;
  margin-right: auto;
  margin-left: 4px;
  line-height: 2rem;
  border: none;
`;
const TodoText = styled.textarea`
  width: 100%;
  max-width: 80%;
  margin-right: auto;
  margin-left: 4px;
  line-height: 2rem;
  border: 1px solid;
`;
const CustomButton = styled.button`
  background: #fcb500;
  width: 40px;
  height: 40px;
  color: ${(props) => (props.warning ? "red" : "Blue")};
  font-size: 1.2rem;
  margin-right: 4px;
  background: transparent;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
  border: none;
  &:focus {
    outline: none;
  }
`;
