//npm start
import React from "react"

const todo =[
  {description: 'buy apples', isDone: false},
  {description: 'buy oranges', isDone: true}
]

class App extends React.Component{

  state = {
    todos: [
      {description: 'buy apples', isDone: false},
      {description: 'buy oranges', isDone: true}

    ],

    newTodoDescription: "",
    }

    handleAddTodo = () => {
      //step 1: get new todo description
      const  newTodoDescription = this.state.newTodoDescription
      //step 2: create new todo object from the description
      const newTodo = {
      description: newTodoDescription,
      isDone: false
      }
      //step 3: Update react component state
      const newTodos = [
        ...this.state.todos, //... expands out an array into another array instead of putting an array into an array
        newTodo,
      ];

      this.setState({
        todos: newTodos,
      });

    }

    handleonChange = event => {
  const {name, value} = event.target; //this is same as event.target.name, event.target.value
  // name = "newTodoDescription"
  // value = "something to do"
  this.setState(
    {
      //newTodoDescription: value,
      [name]: value,
    }
  )
}


  handleTodoClick = (currentTodo) =>{

    // if (currentTodo.isDone){
    //   currentTodo.isDone = false
    // }else{
    //   currentTodo.isDone = true
    // }
//shorter method:
    currentTodo.isDone = !currentTodo.isDone;

    //function to say hey something in the todos has changed notification
    const updatedState = {
      todos: this.state.todos
    }
//activate function
    this.setState(updatedState)

  }


  render() {

    return <div>

      <h1>My awesome todo list</h1>
      <label htmlFor="newTodoDescription">Add Todo</label>
      <input type="text"
        value ={this.state.newTodoDescription}
        name = "newTodoDescription"
        id = "newTodoDescription"
        onChange = {this.handleonChange}
        />
      <button onClick ={this.handleAddTodo}> + </button>

      <ul>
        {this.state.todos.map((todo) =>{
          let className = "";

          if (todo.isDone){
            className = "complete"
          }
          return <li className={className}
                     onClick={() => this.handleTodoClick(todo)}>{todo.description}</li>
        })}
      </ul>
    </div>
  }

}

export default App
