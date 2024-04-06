import "./../style/AddTodo.css"
function AddTodo(){
return <>
 <div class="container text-center">
 <div class="row">
    <div class="col">
     <input type="text" placeholder="Enter Todo here"></input>
    </div>
    <div class="col">
     <input type="date"/>
    </div>
    <div class="col">
    <button type="button" class="btn btn-success">Add</button>
    </div>
  </div>
  </div>
 
</>
}

export default AddTodo