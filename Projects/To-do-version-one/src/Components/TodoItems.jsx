
import Item from "./Item";
import styles from "./Todoitems.module.css";
const todoItems = ({todoItems})=>{
    return <>
     <div className ={styles.itemsContainer} >
        
           {todoItems.map(item=>
            ( <Item key={item.id} itemName={item.name} itemDate={item.dueDate}></Item>))}
        
     

      </div>
     
    </>
}
export default todoItems