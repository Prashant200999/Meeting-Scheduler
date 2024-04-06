import React, { useState } from "react";
import { FaPerson , FaPeopleGroup ,FaPeopleLine ,FaPeopleRoof ,FaCartPlus ,FaConnectdevelop ,FaArtstation,FaCartShopping ,FaBasketShopping,FaPersonCircleCheck ,FaBook,FaQuestion ,FaProductHunt}  from "react-icons/fa6";
import { SiLeaderprice } from "react-icons/si";
import Submissioncard from "./submissionCard";


const Form = () => {
   const [formData, setFormData] = useState({
    fullName:'',
    email:'',
    numOfGuest:'',
    strength:'',
    typeOfWork:'',
    helpForMeet:'',
    nameOfWorkspace:''
   });
 
   
   const [showSubmissionCard, setShowSubmissionCard] = useState(false);
   const [isAddGuestClicked, setIsAddGuestClicked] = useState(false);

   const handleAddGuest = (e) => {
    e.preventDefault(); 
    setIsAddGuestClicked(true);
    
  };

   const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'radio') {
      if (checked) {
        setFormData({
          ...formData,
          [name]: value
        });
      }
    } 
else if (type==='checkbox'){
  setFormData({
    ...formData,
    [name]: checked ? [...(formData[name] || []),value] : formData[name].filter(item => item !== value)

  });
}    else if (type === 'number') {

  const isValidNumber = /^\d*\.?\d*$/.test(value);
  if (isValidNumber) {
    setFormData({
      ...formData,
      [name]: value
    });
  }
} 
    else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

   const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.strength || !formData.typeOfWork){
    alert('Please fill out all required fields.')
    return;
  }
    setShowSubmissionCard(true);
   };





   return (
    <div className='w-2/3 border-l-2 border-gray-400 bg-gray-200 p-8  form_cont'>

      {!showSubmissionCard ? (
       
        <>
      <h2 className="mb-10 text-center font-bold text-2xl " >Enter Details</h2>
      <form className="max-w-md " onSubmit={handleSubmit}>
        <div className="relative z-0 w-full mb-5 group">
         
          <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleInputChange}  className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'/>
          <label htmlFor="fullName" className=" required-field  peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100  peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your Full Name:</label>
        </div>
       
        <div className="relative z-0 w-full mb-5 group"> 
         
          <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange}  className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'/> 
          <label htmlFor="email" className="required-field peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your Email:</label>
        </div>

      

        <div className="relative z-0 w-full mb-5 group">
          <input type="number" id="numOfGuest" name="numOfGuest"  value={formData.numOfGuest} onChange={handleInputChange} min="0" max="5"  className='mr-8 py-1 px-0 w-16 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'/> 
          <button onClick={handleAddGuest} className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >Add Guest</button> <span className=" text-xs text-red-700">not more than 5 members!</span>
          {isAddGuestClicked && (
          <div>
            <span>{`Number of Guests added : ${formData.numOfGuest}`}</span>
          </div>   
          )}     
        </div>

        <div className="relative w-full mb-5 group">
          <h3 className="required-field mb-4 w-56 font-semibold text-gray-900">I want company to work for:</h3>
          
          <div className="flex items-center mb-4">
              <input  type="radio" value="MySelf" name="strength" id="strength1" onChange={handleInputChange} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 mr-2"/>
              &nbsp;<FaPerson /> 
              <label htmlFor="strength1" className="text-sm font-medium text-gray-900 "> MySelf</label>
          </div>
          <div className="flex items-center mb-4">
              <input  type="radio" value="&lt; 10 People" name="strength" id="strength2" onChange={handleInputChange} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 mr-2"/>
              &nbsp;<FaPeopleGroup/>
              <label htmlFor="strength2" className="text-sm font-medium text-gray-900 ">  &lt; 10 People</label>
          </div>
          <div className="flex items-center mb-4">
              <input  type="radio" value="10-50 People" name="strength" id="strength3" onChange={handleInputChange} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 mr-2"/>
              &nbsp;<FaPeopleLine />
              <label htmlFor="strength3" className="text-sm font-medium text-gray-900 "> 10-50 People</label>
          </div>
          <div className="flex items-center mb-4">
              <input type="radio" value="&gt; 50 People" name="strength" id="strength4" onChange={handleInputChange} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 mr-2"/>
              &nbsp;<FaPeopleRoof />
              <label htmlFor="strength4" className="text-sm font-medium text-gray-900 "> &gt; 50 People</label>
          </div>

        </div>
        <div className="relative w-full mb-5 group">

          <h3 className="required-field w-44 mb-4 font-semibold text-gray-900">You are more about :</h3>

          <div className="flex items-center mb-4">
            <input  type="checkbox" value="Leadership" name="typeOfWork" id="checkbox1" onChange={handleInputChange} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
            &nbsp;<SiLeaderprice />
            <label htmlFor="checkbox1" className="ms-2 text-sm font-medium text-gray-900">Leadership</label>
          </div>
          <div className="flex items-center mb-4">
            <input  type="checkbox" value="Consulting" name="typeOfWork" id="checkbox2" onChange={handleInputChange} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
            &nbsp;<FaCartPlus />
            <label htmlFor="checkbox2" className="ms-2 text-sm font-medium text-gray-900">Consulting</label>
          </div>
          <div className="flex items-center mb-4">
            <input  type="checkbox" value="Product Management" name="typeOfWork" id="checkbox3" onChange={handleInputChange} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
            &nbsp;<FaProductHunt />
            <label htmlFor="checkbox3" className="ms-2 text-sm font-medium text-gray-900">Product Management</label>
          </div>
          <div className="flex items-center mb-4">
            <input  type="checkbox" value="Design" name="typeOfWork" id="checkbox4" onChange={handleInputChange} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 "/>
            &nbsp;<FaArtstation />
            <label htmlFor="checkbox4" className="ms-2 text-sm font-medium text-gray-900">Design</label>
          </div>
          <div className="flex items-center mb-4">
            <input  type="checkbox" value="Engineering" name="typeOfWork" id="checkbox5" onChange={handleInputChange} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
            &nbsp;<FaConnectdevelop/>
            <label htmlFor="checkbox5" className="ms-2 text-sm font-medium text-gray-900">Engineering</label>
          </div>
          <div className="flex items-center mb-4">
            <input  type="checkbox" value="Sales" name="typeOfWork" id="checkbox6" onChange={handleInputChange} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
           &nbsp;<FaBasketShopping />
            <label htmlFor="checkbox6" className="ms-2 text-sm font-medium text-gray-900">Sales</label>
          </div>
          <div className="flex items-center mb-4">
            <input  type="checkbox" value="Marketing" name="typeOfWork" id="checkbox7" onChange={handleInputChange} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
            &nbsp;<FaCartShopping />
            <label htmlFor="checkbox7" className="ms-2 text-sm font-medium text-gray-900">Marketing</label>
          </div>
          <div className="flex items-center mb-4">
            <input  type="checkbox" value="Human Resources" name="typeOfWork" id="checkbox8" onChange={handleInputChange} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
            &nbsp;<FaPersonCircleCheck />
            <label htmlFor="checkbox8" className="ms-2 text-sm font-medium text-gray-900">Human Resources</label>
          </div>
          <div className="flex items-center mb-4">
            <input  type="checkbox" value="Education" name="typeOfWork" id="checkbox9" onChange={handleInputChange} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
            &nbsp;<FaBook/>
            <label htmlFor="checkbox9" className="ms-2 text-sm font-medium text-gray-900">Education</label>
          </div>
          <div className="flex items-center mb-4">
            <input  type="checkbox" value="Something else" name="typeOfWork" id="checkbox10" onChange={handleInputChange} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
            &nbsp;<FaQuestion />
            <label htmlFor="checkbox10" className="ms-2 text-sm font-medium text-gray-900">Something else</label>
          </div>

        </div>

          <div className="items-center mb-4">
            <label htmlFor="helpForMeet" className="mb-4 font-semibold text-gray-900 ">Please,share anything that will help prepare for our meeting</label>
            
            <textarea  id="helpForMeet" name="helpForMeet" onChange={handleInputChange} rows="7" className="p-2.5 w-full text-sm text-gray-900 bg-transparent placeholder:text-gray-600 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "  placeholder="Share your thoughts here..."></textarea>
          </div>

          <div className="items-center mb-4">
            <label htmlFor="nameOfWorkspace" className="mb-4 font-semibold text-gray-900 ">Please,share with us the name of your workspace (if any) </label>
            
            <textarea id="nameOfWorkspace" name="nameOfWorkspace" onChange={handleInputChange} rows="3" className="p-2.5 w-full text-sm text-gray-900 bg-transparent placeholder:text-gray-600 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Name of your workspace"></textarea>
          </div>


        <div className="relative z-0 w-full mb-5 group"> 
         <button  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 " type="submit">Submit</button>
        </div>
      </form>
        </>
      ) : null }

      

    {
      showSubmissionCard &&
    
    <Submissioncard formData = {formData}  />}

    </div>
    
  );
};
export default Form;
