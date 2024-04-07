
import Item from "./Item";
import styles from "./Todoitems.module.css";
const todoItems = ({todoItems})=>{
    return <>
     <div className ="itemsContainer" key="key">
        
           {todoItems.map(item=> <Item itemName={item.name} itemDate={item.dueDate}></Item>)}
        
     

      </div>
     
    </>
}
export default todoItems