import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import App from "../App";
import Home from "../Pages/Home";
import Mainlayout from "../Layout/Mainlayout";
import Addcoffee from "../Component/Addcoffee";
import UpdateCoffee from "../Component/UpdateCoffee";

let router=createBrowserRouter([



{
    path:'/',
    Component: Mainlayout,
    children:[
        
        {
       index:true,
       loader:()=>fetch('http://localhost:3000/coffies').then(res=>res.json()),
       Component : Home
      
    },

  {
    path: '/addcoffee',
    lazy: async () => {
        // মডিউলটি ইম্পোর্ট করা হচ্ছে
        const module = await import('../Component/Addcoffee');
        
        // যদি default export থাকে তবে সেটি রিটার্ন করবে, নাহলে named export চেক করবে
        return { 
            Component: module.default || module.Addcoffee 
        };
    }
},

    {

        path: '/updatecoffee',
        Component : UpdateCoffee
    }
]


}




])

export default router;