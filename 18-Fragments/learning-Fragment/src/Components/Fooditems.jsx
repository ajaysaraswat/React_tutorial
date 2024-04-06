import Item from "./Items";

let Fooditems=(item)=>{
     let foodItems = ["Dal","milk","roti","salad","patato"];
    return <ul className="list-group ">
    {foodItems.map((item)=>(
        <Item key={item} fooditem={item} ></Item>

        



    ))}
</ul>
}
export default Fooditems;