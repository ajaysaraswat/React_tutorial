import "./../style/AddTodo.css"
function AddTodo(){
return <>
 <div className="container text-center">
 <div className="row">
    <div className="col">
     <input type="text" placeholder="Enter Todo here"></input>
    </div>
    <div className="col">
     <input type="date"/>
    </div>
    <div className="col">
    <button type="button" class="btn btn-success">Add</button>
    </div>
  </div>
  </div>
 
</>
}

export default AddTodo