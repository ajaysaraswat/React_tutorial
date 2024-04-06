
const Item = (props)=>{
    return <>  
<li key = {props.fooditem} className="list-group-item Kg-item">
    {props.fooditem}
</li>
</>
}

export default Item;