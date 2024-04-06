import React from 'react';
import { Button } from "@material-tailwind/react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const MeetingSchedule = ({ date, handleDateChange, availableTimes, handleTimeChange, selectedTime }) => (
    <div className=' border-l-2 border-gray-400  bg-gray-200 p-8 form_cont  lg:flex w-[492px]'>
      <div>
        <h2 className='text-xl font-semibold '>Select a Date & Time</h2>
        <br/>
        <Calendar
          onChange={handleDateChange}
          value={date}
          selectRange={true}
        />
     
      </div>

      {date && (
        <div className='flex-row'>
          <div className='w-full ml-2'>
            <h3>Select a time</h3>
            <div className='time-selection-container '>
              {availableTimes.map((time) => (
                <Button variant='filled' className={'text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 '}
                  key={time}
                  onClick={() => handleTimeChange(time)}
                  disabled={selectedTime === time}
                >
                  {time}
                </Button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
  export default MeetingSchedule;
  