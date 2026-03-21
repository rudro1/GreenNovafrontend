import React from 'react';
import Useform from './Formgrid.jsx/Useform';
import Button from './Button';
import Swal from 'sweetalert2'
import Back from './home/Back/Back';
import coffeebg from '/Users/rudro/Desktop/restart/mile-10/module56/greennova/src/assets/more/11.png';
import { useState } from 'react';
import { useNavigation } from 'react-router';
const Addcoffee = ({heading,value,intialoffee,handleupdate}) => {
const navigate=useNavigation();
    const [imgpreview,setimgpreview]=useState(intialoffee?.image || null)


    const handleImageChange=(e)=>{
        console.log('image')

const file= e.target.files[0];
console.log(file)
if(file)
{
   const imgurl=URL.createObjectURL(file);
   setimgpreview(imgurl);

}
    }
    const handlesubmit=async(e)=>{
        e.preventDefault();
//        const name= e.target.name.value;
//        const cheif= e.target.name.value;
//        const Supplier= e.target.Supplier.value;
//        const Taste= e.target.Taste.value;
//        const Category= e.target.Category.value;
//        const Details= e.target.Details.value;
//        const Photo= e.target.Photo.value;
//   const adddata={
//     name,cheif,Supplier,Taste,Category,Details,Photo
//   }

// formData.entries() কী করে?
// এটি আপনার ফর্মের প্রতিটি ইনপুট থেকে একটি লিস্ট বা তালিকা তৈরি করে। এই তালিকায় প্রতিটি আইটেম জোড়ায় জোড়ায় থাকে: [নাম, মান]।

// যেমন: ['name', 'Espresso'], ['chef', 'Bisal']

// ২. Object.fromEntries() কী করে?
// এটি ওই জোড়া লাগানো তালিকাটিকে নিয়ে একটি সুন্দর JavaScript Object তৈরি করে ফেলে।

const form=e.target;
if(imgpreview)
{
const formdata=new FormData(form);

const file= form.image.files[0];

formdata.append('image',file); 
const uri = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`;
// console.log(formdata)




try{

const response=await fetch(uri,{
    method:'POST',
    body:formdata
})
const imagedata=await response.json();

if(imagedata.success)
{
    const imageUrl = imagedata.data.display_url; // ইমেজের লিঙ্ক পাওয়া গেল
    console.log(imageUrl);
    const adddata= Object.fromEntries(new FormData(form).entries())
adddata.image=imageUrl
console.log(adddata);


value==undefined && fetch('http://localhost:3000/addcoffees',{
    method:'POST',
    headers:{
        'Content-Type':'application/json'
    },
    body: JSON.stringify(adddata)
})
.then(res=>res.json())
.then(data=>{console.log(data)

Swal.fire({
  title: "Good Luck !!",
    text: "Added a New coffee details.",
  icon: "success",
  draggable: true
});


})

console.log(adddata,value==('Update Coffee Details') || 'Add Coffee');
e.target.reset();
navigate('/')
}
}



catch(error)
{
console.error("Upload error:", error);
}
}


    }

    
    return (

         <div className='w-full flex flex-col  relative min-h-screen py-5 px-5  md:py-20 bg-[#ffffff] md:px-20'>
 
        <div className='absolute w-full h-full  top-0 z-5 '>
<img src={coffeebg} alt="" />
        </div> 

<div className=' z-10  w-12/12 md:w-10/12 mx-auto!'>
<Back></Back>
        <div className='md:px-28! px-8! mx-0 bg-[#F4F3F1] text-[#374151] pt-2! pb-10!  md:pt-15! md:pb-20!'>
          
            <div className='md:px-20! px-0!  w-full'>
               <h1 
    className='text-center rancho-regular text-[#374151] font-extrabold text-2xl md:text-5xl leading-tight'
    style={{ textShadow: '2px 4px 4px rgba(0, 0, 0, 0.25)' }} // ইমেজের মতো সফট শ্যাডো
>
    {heading || 'Add New Coffee'}
</h1> <p className='md:mt-8! md:mb-10! mt-5! mb-5! text-[#1B1A1AB3] text-md md:text-lg raleway font-normal leading-relaxed text-center w-full  mx-auto'>
    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.
</p>
            </div>

           <div>
            <form onSubmit={intialoffee ? handleupdate :handlesubmit} className='flex flex-col gap-y-2 md:gap-y-5 w-full  capitalize'>
             <div className='grid grid-cols-1 md:grid-cols-2 gap-6 w-full'>


    <Useform legend={'name'} inputtext={intialoffee?.name || 'Enter coffee name '}   ></Useform>
    <Useform legend={'Chef'} inputtext={ intialoffee?.Chef ||'Enter coffee chef'}  ></Useform>
    <Useform legend={'Supplier'} inputtext={intialoffee?.Supplier ||'Enter coffee supplier'}  ></Useform>
    <Useform legend={'Taste'} inputtext={intialoffee?.Taste ||'Enter coffee taste'}  ></Useform>
    <Useform legend={'Category'} inputtext={ intialoffee?.Category || 'Enter coffee category'}  ></Useform>
    <Useform legend={'Details'} inputtext={intialoffee?.Details || 'Enter coffee details'}  ></Useform>
  

    


            </div>
             <div className=''>
<div className='mb-6!'>
                       <Useform legend={'price'} type={'number'} inputtext={intialoffee?.price || 'Enter coffee Price'}  ></Useform>
</div>
              {
                imgpreview  && <div>
                    
                    <img src= {imgpreview} alt="" />

                    </div>

              }   
                                      <Useform handleImageChange={handleImageChange} legend={'image'} inputtext={'Enter photo URL'} type={'file'}  ></Useform>
             </div>
       

       <Button value={value ||'Add Coffee'}></Button>
         
          
          </form>
           </div>


        </div>
        </div>
        </div>
    );
};

export default Addcoffee;