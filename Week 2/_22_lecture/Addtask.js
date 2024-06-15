const AddTask=()=>
{
    
    return (<>
    <h3 className="ui heading center">Add new Task</h3>
        <div className="ui form">
        <form>
        <div className="field">
    <label>Title</label>
    <input type="text" placeholder="Task Title" name="title"/>
  </div>
            <div className="field">
        <label>Description</label>
         <textarea rows="2" placeholder="Task Description" name="description"></textarea>
         </div>
         <button className="ui primary button">Submit</button>
        </form>
    </div>
    </>
    )
}
export default AddTask;
