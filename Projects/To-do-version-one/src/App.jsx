import AddTodo from "./Components/AddTodo";
import AppName from "./Components/AppName";


import TodoItems from "./Components/TodoItems";

import "./App.css"




function App() {
 
  const todoItems = [
    {
      name :"Buy the Milk",
      dueDate: "4/10/24",
    },
    {
      name :"go to school",
      dueDate: "4/10/24",
    },
    {
      name :"Like this ",
      dueDate: "right now",
    },
  ];
  return <center className="to-do-container">
      
      <AppName/>    
      <AddTodo/>
      <TodoItems todoItems={todoItems}/>
      
      
  
    

  </center>
   

 
}

export default App ;
