import Item from "./Items";

let Fooditems=()=>{
   
    let foodItems = ["Dal","milk","roti","salad","paato"];
    return <ul className="list-group ">
    {foodItems.map((item)=> <Item key={item} fooditem={item} ></Item>)}
       

        



    
</ul>
}
export default Fooditems;