import ToDoscreem from "./screens/ToDoscreem";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import AddTask from "./components/AddTask";
import { useState } from "react";
const router=createBrowserRouter([
    {
        path:"/",
        element:<ToDoscreem/>,
    },
    {
        path:"/add-task",
        element:<AddTask></AddTask>
    },
]);
const App=()=>{
const [tasks,setTask]=useState([]);
    return < RouterProvider router={router}/>
};
export default App;
