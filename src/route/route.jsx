import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import App from "../App";
import Home from "../Pages/Home";
import Mainlayout from "../Layout/Mainlayout";

let router=createBrowserRouter([



{
    path:'/',
    Component: Mainlayout,
    children:[{
        path:'/',
      
    }
]


}




])

export default router;