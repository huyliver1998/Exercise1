import React from "react";
import styled from "styled-components";
import NewTask from "./NewTask";
import TaskList from "./TaskList";

const Mainpage = (props) => {
  const todosNotInTrach = props.todos.filter((todo) => !todo.isInTrash);
  const todosList = todosNotInTrach.filter((todo) => !todo.isCompleted);
  const todosCompleted = todosNotInTrach.filter((todo) => todo.isCompleted);
  return (
    <>
      <NewTask  addTodo={props.addTodo}/>
      <MainWrapper>
        <TaskList
          text="Todo"
          primary
          todos={todosList}
          setCompleted={props.setCompleted}
          deleteTodo={props.deleteTodo}
        ></TaskList>
        <TaskList
          text="Completed"
          todos={todosCompleted}
          setCompleted={props.setCompleted}
          deleteTodo={props.deleteTodo}
        ></TaskList>
      </MainWrapper>
    </>
  );
};

const MainWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  margin: 1.5rem 0;
`;

export default Mainpage;
