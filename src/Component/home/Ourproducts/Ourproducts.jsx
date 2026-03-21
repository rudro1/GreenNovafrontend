import React from 'react';
import Productcard from './Productcard';
import backgroundimg from '/Users/rudro/Desktop/restart/mile-10/module56/greennova/src/assets/more/1.png';
import { Link, useNavigate, useNavigation } from 'react-router';
import Swal from 'sweetalert2';
const Ourproducts = ({products,setCoffees}) => {
const navigate=useNavigate();
    const handlechange=()=>{
navigate('/addcoffee');

    }




const handledelete=(id)=>{
console.log(id);

Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
 if (result.isConfirmed) {
fetch(`http://localhost:3000/coffies/${id}`,{

method:'DELETE'

})
.then(res=>res.json())
.then(data=>{
    console.log(data)



    const remaning=products.filter(item=>item._id !=id);
  
    setCoffees(remaning);
// console.log(data.result.deletedCount);
 (data.result.deletedCount) && Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });


    
}



)
 
   
  }
});

}

    // console.log(products)
    return (
               <div className={`flex flex-col items-center relative z-10 bg-[#ffffff] py-5 md:py-10 `}>
 
<div className='absolute top-10 h-full w-full   md:bottom-30  z-5 '>
     <img src={backgroundimg} className='h-full w-full object-top-left' alt="" />
</div>
        <div className='w-12/12 md:w-9/12 '>
       
           <div className='flex flex-col justify-center items-center  text-center'>
             <p className='text-[#1B1A1A] text-xl releway font-normal'>--- Sip & Savor ---</p>
            <p className='coffetitle  rancho-regular text-[#374151] font-extrabold text-3xl md:text-4xl leading-tight'>Our Popular Products</p>
         <button to={'/addcoffee'} onClick={handlechange} className='btn z-15 btn-artisan w-fit rancho-regular text-xl mt-2!'>
    Add Coffee
</button>
           </div>

      
              <div className=' grid grid-cols-1 lg:grid-cols-2 gap-5 text-black py-5 md:py-10 '>
            {
                products.map(product=> <Productcard key={product._id} product={product} handledelete={handledelete} setCoffees={setCoffees}></Productcard>)
            }
           
           </div>
         </div>
        </div>
    );
};

export default Ourproducts;