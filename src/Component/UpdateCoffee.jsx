import React from 'react';
import Addcoffee from './Addcoffee';
import { useLoaderData, useNavigate, useNavigation } from 'react-router';

const UpdateCoffee = () => {
  const intialoffee=useLoaderData();
  const navigate=useNavigate();
  const handleupdate= async (e)=>{
   e.preventDefault();
   console.log("update");





   const form=e.target;



   const formdata=new FormData(form);

   const file=form.image.files[0];
   formdata.append('image',file);


const uri = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`;

try{
  
const response= await fetch(uri,{
  method:'POST',
  body:formdata
})
const imgdata=await response.json();
 console.log(imgdata)
 if(imgdata.success)
 {
  const imgurl=imgdata.data.display_url;
  const allupdatedata=Object.fromEntries(new FormData(form).entries());
  allupdatedata.image=imgurl;
  console.log(allupdatedata);

  fetch(`http://localhost:3000/update/${intialoffee._id}`,{

    method:'PUT',
    headers:{
      'content-type':'application/json'
    },
    body:JSON.stringify(allupdatedata)
  }).then(res=>res.json())
  .then(data=>{console.log(data)
  
  navigate('/')
  
  
  }
  )

 }
}

catch(e)
{
  console.log(e.message);
}
   



   

  }
  console.log(intialoffee)
    return (
      <Addcoffee heading={'Update Existing Coffee Details'} intialoffee={intialoffee} handleupdate={handleupdate} value={'Update Coffee Details'}></Addcoffee>
    );
};

export default UpdateCoffee;