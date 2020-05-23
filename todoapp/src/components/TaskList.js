import React from "react";
import styled from "styled-components";
import Banner from "./Banner";
import Task from "./Task";

const TaskList = (props) => {
  return (
    <TaskItem>
      <Banner primary={props.primary}>{props.text}</Banner>
      {props.todos.map((todo) => (
        <Task key={todo.id} primary={props.primary} todo={todo} setCompleted={props.setCompleted} deleteTodo ={props.deleteTodo}/>
      ))}
    </TaskItem>
  );
};
const TaskItem = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center;
`;

export default TaskList;
