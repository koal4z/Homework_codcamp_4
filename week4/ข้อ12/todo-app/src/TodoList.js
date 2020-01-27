import React from "react";
import styles from "./TodoList.module.css";
import Todo from "./components/Todo";
import NewTodo from "./components/NewTodo";

class TodoList extends React.Component {
  state = {
    todos: [
      { ticked: true, name: "Buy Milk" },
      { ticked: false, name: "Buy Egg" },
      { ticked: false, name: "Buy Bread" },
      { ticked: false, name: "Bite the dust" }  
    ],
    textValue: ""
  };

  handleAdd = () => {
    if (!this.state.textValue) {
      alert("please fill something");
      return;
    }
    this.setState(
      state => ({
        todos: state.todos.concat({ ticked: false, name: state.textValue })
      }),
      () => {
        this.setState({ textValue: "" });
      }
    );
  };
  handleKeydown = k => {
    //console.log(k.key);
    if (this.state.textValue && k.key === "Enter")
     { return this.setState(
        state => ({
          todos: state.todos.concat({ ticked: false, name: state.textValue })
        }),
        () => {
          this.setState({ textValue: "" });
        }
      )} else if (!this.state.textValue && k.key === "Enter") 
      {alert("please fill something")}
  };

  handleValue = e => {
    console.log(e.target.value);
    this.setState({
      textValue: e.target.value
    });
  };

  handleTick = idx => () => {
    this.setState(state => ({
      todos: state.todos.map((todo, todoIdx) =>
        todoIdx === idx ? { ...todo, ticked: !todo.ticked } : todo
      )
    }));
  };

  handleDelete = idx => () => {
    this.setState(state => ({
      todos: state.todos.filter((todo, todoIdx) => todoIdx !== idx)
    }));
  };

  render = () => {
    return (
      <div className={styles.Root}>
        <NewTodo
          value={this.state.textValue}
          onValue={this.handleValue}
          onAdd={this.handleAdd}
          onKey={this.handleKeydown}
        />
        {this.state.todos.map((todo, idx) => (
          <Todo
            key={idx}
            ticked={todo.ticked}
            name={todo.name}
            onTick={this.handleTick(idx)}
            onDelete={this.handleDelete(idx)}
          />
        ))}
      </div>
    );
  };
}

export default TodoList;
