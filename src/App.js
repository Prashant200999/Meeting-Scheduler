import React, { useState } from 'react';

import 'react-calendar/dist/Calendar.css';

import LogoAndBookingInfo from './components/logo_booking';
import MeetingSchedule from './components/meeting_schedule';
import Form from './components/form';




const BookingSchedule = () => {
  const [date, setDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [endingTime, setEndingTime] = useState(null);
  const availableTimes = ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30'];
  const [showBookingDetails, setShowBookingDetails] = useState(false);

  const [showMeetingSchedule, setShowMeetingSchedule] = useState(true);
  
  
  const handleDateChange = (newDate) => {
    setDate(newDate instanceof Date ? [newDate] : newDate);
    setSelectedTime(null);


  };



  const handleTimeChange = (time) => {
    setSelectedTime(time);
    const [hour, minute] = time.split(':').map(Number);
    const endingHour = (hour + 1) % 24; 
    const endingTime = `${endingHour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
    setEndingTime(endingTime);


  };

  
    const handleNextClick = () => {
    setShowBookingDetails(true);
    
    setShowMeetingSchedule(false);


  };

  return (

    <div className='bg-gray-300  h-screen flex justify-center items-center'>
      <div className='w-2/3 mx-auto my-32'>
        <div className='flex border-1 rounded-xl main_cont shadow-2xl '>
          <LogoAndBookingInfo selectedTime={selectedTime} date={date} endingTime={endingTime} setShowBookingDetails={setShowBookingDetails} handleNextClick={handleNextClick}/>
          {showBookingDetails && 
             <Form 
              handleTimeChange = {handleTimeChange}
              />
                 }
                   {showMeetingSchedule && (
          <MeetingSchedule
            date={date}
            handleDateChange={handleDateChange}
            availableTimes={availableTimes}
            handleTimeChange={handleTimeChange}
            selectedTime={selectedTime}
            
          />
          )}
        </div>
      </div>
    </div>
  );
};


export default BookingSchedule;      