import React from 'react';

const Useform = ({legend,inputtext,type}) => {
    return (
                      <fieldset className="fieldset w-full  ">
  <legend className="fieldset-legend text-left text-[#464544] text-xl ">{legend}</legend>
  <input type={type || 'text'} accept={type && "image/*"} className={`input w-full mt-2! md:mt-3! text-lg text-[#767575]  bg-white ${type && 'file-input'} `} name={legend} placeholder={inputtext} required />

</fieldset>

    );
};

export default Useform;