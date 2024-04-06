import AddTodo from "./Components/AddTodo";
import AppName from "./Components/AppName";
import DeleteTodo from "./Components/DeleteTodo";
import DeleteTodo1 from "./Components/DeleteTodo1";



function App() {
 

  return <center className="to-do-container">
     <AppName/>
      
      <AddTodo/>
      <DeleteTodo/>
      <DeleteTodo1/>
  
    

  </center>
   

 
}

export default App ;
