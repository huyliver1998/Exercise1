import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Mainpage from "./Mainpage";

export default class App extends React.Component {
  state = {
    todos: [],
  };
  componentDidMount() {
    this.setState({ todos: this.props.todos} );
  }
  addTodo =(text) =>{
    const newTodo ={
      id: this.state.todos.length +1,
      title: text,
      isCompleted: false,
      isInTrash: false,
    };
    this.setState({todos: [...this.state.todos, newTodo]});
  }
  setCompleted = (todoId) => {
    const todo = this.state.todos.find((todo) => todo.id === todoId);  
    const todoList = this.state.todos.filter((todo) => todo.id !== todoId);
    const newTodo = {
      id: todo.id,
      title: todo.title,
      isCompleted: ! todo.isCompleted,
      isInTrash: todo.isInTrash,
    };
    this.setState({ todos: [...todoList, newTodo] });
  };

  deleteTodo =(todoId) => {
    const todo = this.state.todos.find((todo) => todo.id === todoId); 
    const todoList = this.state.todos.filter((todo) => todo.id !== todoId);
    const newTodo = {
      id: todo.id,
      title: todo.title,
      isCompleted: todo.isCompleted,
      isInTrash: !todo.isInTrash,
    };
    this.setState({ todos: [...todoList, newTodo] });
  }
  render() {
    return (
      <AppContainer>
        <Navbar />
        <Mainpage
         todos={this.state.todos} 
         setCompleted={this.setCompleted} 
         deleteTodo={this.deleteTodo}
         addTodo={this.addTodo}
         />
      </AppContainer>
    );
  }
}
const AppContainer = styled.div`
  width: min(960px, 100%);
  margin: 0 auto;
`;
