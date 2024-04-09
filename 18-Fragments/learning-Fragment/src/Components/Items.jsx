import Styles from "./item.module.css"
const Item = (props)=>{
    const handleBuyBottonClicked=(event)=>{
        console.log(event);
        console.log(`${props.fooditem} being brought`);
    }
    return <>  
<li key = {props.fooditem} className="list-group-item Kg-item">
    {props.fooditem}
    <button className={Styles.button} onClick={(event)=>handleBuyBottonClicked(event)}>
    
        buy
    
    </button>
    
</li>
</>
}

export default Item;