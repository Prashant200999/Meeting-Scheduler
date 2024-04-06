import React from 'react';
import { Button } from "@material-tailwind/react";
import { FaClockRotateLeft } from 'react-icons/fa6';
const LogoAndBookingInfo = ({ selectedTime, date , endingTime, setShowBookingDetails,handleNextClick }) => (
    <div className='w-1/3 bg-gray-200 p-4 max-md:p-0'>
      <div className='logo h-32 max-md:w-[50px] '>
        
        <img style={{width:100,height:100}} alt='logo' className='ml-6 max-md:ml-4 max-lg:ml-4 max-md:mt-4 bg-transparent border-0 rounded-full' src='./logo.jpg'></img>
      </div>
      <div className='border-t-2 border-gray-400 max-md:mx-1 max-md:font-light max-md:text-sm max-md:leading-4 max-lg:leading-5'>
      {selectedTime && date && (
        <div>
            
          {Array.isArray(date) ? (
            <p>You have selected {selectedTime} on {date.map(d => d.toDateString()).join(` to  ${endingTime}` )}</p>
          ) : (
            <p>You have selected {selectedTime} on {date.toDateString()} to {endingTime}</p>
          )}

        <div>
         <FaClockRotateLeft className='inline '/>&nbsp;<span>1 Hour</span>
     
        </div>

            <Button variant='outlined' className='text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 mt-8 max-md:px-1 max-md:mx-1 max-md:w-16 max-md:mt-4 ' 
             onClick={() => {
                setShowBookingDetails(true)
                    handleNextClick(true)
                    
             }
                       }
             >Next</Button>
         
          </div>
        )} 
        {!selectedTime && <p className='max-md:ml-4' >select slot</p>}
      </div>
      
    </div>
  );
  export default LogoAndBookingInfo;