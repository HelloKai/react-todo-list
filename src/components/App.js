//npm start
import React from "react"
import {Todos} from "./todos";
const todo =[
  {description: 'buy apples', isDone: false},
  {description: 'buy oranges', isDone: true}
]

class App extends React.Component{
  render() {
    return <Todos/>;
    }

}

export default App;
