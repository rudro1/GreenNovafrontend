import React from 'react';

const Useform = ({legend,inputtext,type,handleImageChange}) => {
    return (
                    <fieldset className="fieldset w-full">
            <legend className="fieldset-legend text-left text-[#464544] text-xl ">{legend}</legend>
            <input 
                type={type || 'text'} 
                onChange={type=='file' ? handleImageChange :undefined} 
                className={`input w-full mt-2! md:mt-3! text-lg text-[#767575] h-12 bg-white 
                ${type === 'file' ? 'file-input py-1 custom-file-input' : ''}`} 
                name={legend} 
               
                placeholder={inputtext} 
                required 
            />
        </fieldset>

    );
};

export default Useform;