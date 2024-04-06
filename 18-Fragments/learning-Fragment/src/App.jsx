import ErrorMessage from "./Components/ErrorMessage";
import Fooditems from "./Components/Fooditems";
import "./App.css"

function App(){
    // let foodItems = [];
   let foodItems = ["Dal","milk","roti","salad","patato"];
    
    
    return <>
        <h1>Healthy Foods</h1>
       <ErrorMessage ></ErrorMessage>
      <Fooditems></Fooditems>
      
    </>
}
export default App;