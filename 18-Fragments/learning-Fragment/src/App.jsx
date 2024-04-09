import ErrorMessage from "./Components/ErrorMessage";
import Fooditems from "./Components/Fooditems";
import "./App.css"
import Container from "./Components/Container";
import Foodinput from "./Components/Foodinput";
import { useState } from "react";

function App(){
    // let foodItems = [];
    let foodItems = ["Dal","milk","roti","salad","paato"];
  //  let [textToShow ,setTextState] = useState();
  // let {foodItems,setFoodItems} = useState(["salad","milk","roti"]);

// console.log(`current value of textstate ${textToShow}`)

    
  const handleOnChange = (event)=>{
      console.log(`${event.target.value} being brought `);
      // setTextState(event.target.value)
  }
    
   return<>
        
       
    <Container>
        <h1 className="food-heading">Healthy Foods</h1>
       <ErrorMessage ></ErrorMessage>
       <Foodinput handleOnChange={handleOnChange}/>
       {/* <p>{textToShow}</p> */}
      <Fooditems items={foodItems}></Fooditems>
      
    </Container>
    {/* <Container>
WE can make another container for passing the list of healthy foods.this has the same propery

    </Container> */}
      </>
    
}
export default App;