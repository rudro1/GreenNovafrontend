import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import App from "../App";
import Home from "../Pages/Home";
import Mainlayout from "../Layout/Mainlayout";
import Addcoffee from "../Component/Addcoffee";
import UpdateCoffee from "../Component/UpdateCoffee";
import Coffeedetails from "../Component/CoffeeDetails/Coffeedetails";


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
path:'/Coffeedetails/:id',
loader:async({params})=>await fetch(`http://localhost:3000/specifiedcoffies/${params.id}`).then(res=>res.json()),
lazy: async()=>{
    const module=await import('../Component/CoffeeDetails/Coffeedetails');
    return  {
        Component:module.default || module.Coffeedetails
    }
}

},

    {

        path: '/updatecoffee/:id',
        loader:async({params})=> await fetch(`http://localhost:3000/specifiedcoffies/${params.id}`).then(res=>res.json()),
        lazy:async ()=>{
const module=await import('../Component/UpdateCoffee');
return{
    Component: module.default || module.UpdateCoffee
}
        }
    
    }
]


}




])

export default router;