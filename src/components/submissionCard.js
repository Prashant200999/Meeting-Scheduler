import React from "react";
import { IoPersonCircleOutline } from "react-icons/io5"
import { FaPeopleGroup ,FaNetworkWired } from "react-icons/fa6";
import { MdMarkEmailRead } from "react-icons/md";

import { ImProfile } from "react-icons/im";
import { FaCheck } from "react-icons/fa";
const Submissioncard = ({ formData }) => {


   

    return(
        <div className="w-full bg-gray-200">
            <div className="mb-4 flex space-x-4 max-md:space-x-0">
            <FaCheck className="text-2xl" />&nbsp;
            <h2 className="text-center text-2xl mb-4 font-bold">You are scheduled!!</h2>
            </div>
        
        <p className="text-sm font-extralight">A calendar invitation has been sent to your email address</p>
        <div className='w-full border-2 rounded-xl border-gray-300 bg-transparent p-1  form_cont '>
           
          
           
            <div className="mb-2">
            <IoPersonCircleOutline className="inline" />&nbsp;
                <span className="text-xl font-semibold">{formData.fullName}</span>
            </div>
            <div className="mb-2">
            <MdMarkEmailRead className="inline" />&nbsp;
                <span className="text-sm">{formData.email}</span>
            </div>
            <div className="mb-2">
            <FaPeopleGroup className="inline" />&nbsp;
                <span className="text-sm">{formData.numOfGuest}</span>
            </div>
          
            <div className="mb-2">
            <FaNetworkWired className="inline" />&nbsp;
               
                     <ul className="text-sm">
        {Object.entries(formData.typeOfWork).map(([key, value]) => (
          <li key={key}>
            {value}
          </li>
        ))}
      </ul>
                  
            </div>
            
            <div className="mb-2">
            <ImProfile className="inline" />&nbsp;
                
                <span className="text-sm">{formData.nameOfWorkspace}</span>
            </div>
    
       </div>

        <hr className="h-1 mt-4 bg-gray-300" />
        <div className="flex justify-center  space-x-8 md:mx-16 max-md:space-x-8  w-48">
       <a href="https://www.google.com" ><img alt="" src="https://banner2.cleanpng.com/20180413/rfe/kisspng-google-logo-google-cloud-platform-gboard-google-pa-4-5ad0e95b57ec99.9189954815236406673602.jpg" className="logo_link_size"/>  </a>
       <a  href="https://www.facebook.com"><img alt="" src="https://www.edigitalagency.com.au/wp-content/uploads/Facebook-logo-blue-circle-large-transparent-png.png" className="logo_link_size"/>  </a>
       <a href="https://www.linkedin.com"><img alt="" src="https://cdn.icon-icons.com/icons2/2992/PNG/512/linkedin_logo_icon_187302.png" className="logo_link_size"/>  </a>
       <a href="https://twitter.com"><img alt="" src="https://i.pinimg.com/originals/7d/44/d5/7d44d55ead7dda48bd95632d92fb259d.png" className="logo_link_size"/>  </a>
       </div>
       </div>
    );
};

export default Submissioncard;
