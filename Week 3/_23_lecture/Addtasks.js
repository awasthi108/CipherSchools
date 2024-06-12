import { useState } from "react";

const AddTask=()=>
{
    const [task,setTask]=useState({
        title:"",
        description:"",
    });
    let handleInputChange=(e)=>{
setTask({
    ...task,
    [e.target.name]:e.target.value,
});
//awasthi
    };
    let onFormSubmit=(e)=>{
        e.preventDefault();
        console.log(task);
    };
    
    return (<>
    <h3 className="ui heading center">Add new Task</h3>
        <div className="ui form">
        <form onSubmit={onFormSubmit}>
        <div className="field">
    <label>Title</label>
    <input type="text" placeholder="Task Title" name="title"
    onChange={handleInputChange}/>
  </div>
            <div className="field">
        <label>Description</label>
         <textarea rows="2" placeholder="Task Description" name="description"></textarea>
         </div>
         <button type="submit" className="ui primary button">Submit</button>
        </form>
    </div>
    </>
    )
}
export default AddTask;
