function Item({itemName ,itemDate}){
  
    return <>
      <div className="container text-center">
  <div className="row">
    <div className="col">
     {itemName}
    </div>
    <div className="col">
   {itemDate}
    </div>
    <div className="col">
    <button type="button" class="btn btn-danger">Delete</button>
    </div>
  </div>
</div>
    
    </>
}
export default Item