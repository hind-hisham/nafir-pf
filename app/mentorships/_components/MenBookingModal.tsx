'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import {Calendar} from '@/components/ui/calendar';;
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'

export default function MenBookingModal({availableTimes, mentor, mentorshipId, mentorId, menteeId }) {
  const [availableTime, setAvailableTime] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
console.log('yup',availableTimes)
  const handleBooking = async () => {
    
    try {
      setLoading(true);
      const response = await axios.post("http://localhost:8000/api/booking", {
        // mentorship_id: mentorshipId,
        // mentor_id: mentorId,
        // mentee_id: menteeId,
        // day: selectedDay,
        // time: selectedTime,
        // message: message,
      });

      if (response.status === 200) {
        setSuccess(true);
        //setSelectedDay('');
        setSelectedTime(availableTimes); // Reset to the first available time
        setMessage('');
      } else {
        alert("An error occurred during booking, please try again");
      }
    } catch (error) {
      console.error("Booking error:", error);
      alert("An error occurred during booking");
    } finally {
      setLoading(false);
    }
  };



  const parsedTimes = typeof availableTimes === 'string'
  ? JSON.parse(availableTimes)
  : availableTimes;

  return (
    <Dialog >
      <DialogTrigger asChild>
        <button className="bg-primary w-full text-white py-2 px-4 rounded">احجز جلستك</button>
      </DialogTrigger>
      <DialogContent className=" w-full !max-w-[968px]  grid grid-cols-2 gap-6 p-6">  
        <div className="flex justify-center flex-col gap-4">
          <DialogHeader className=' flex flex-col gap-4 w-full jsutify-center items-center'>
<div className='flex flex-col items-center gap-2 mb-2 p-4'>
  <h2 className='text-2xl font-bold'>احجز جلستك</h2>
  <p className='text-sm text-gray-500'>موعدك جاهز - فقط أكد الحجز لضمان الجلسة, راجع التفاصيل وأكد الحجز</p>
  </div>
          <Avatar className='w-16 h-16'>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
            <DialogTitle>{mentor?.name}</DialogTitle>
            <DialogDescription>Choose a day, time, and add a message for your mentor.</DialogDescription>
          </DialogHeader>

<div className='flex flex-col gap-4'>
{/* 
          <label> Message</label>
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="border p-2 rounded "
            /> */}

          <label> Message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="border p-2 rounded h-32"
            />

          <button
            className="bg-primary text-white py-2 px-4 rounded disabled:opacity-50"
            disabled={loading}
            onClick={handleBooking}
            >
            {loading ? 'تاكيد الجلسة...' : ' تاكيد الجلسة'}
          </button>
            </div>

          {success && <p className="text-green-500 mt-4">Booking successful</p>}
        </div>

        <div className="flex gap-4 flex-col items-center justify-start text-xl text-muted-foreground">
<Calendar className='' />
<div dir='rtl' className="flex flex-col gap-4 w-full">
  <label className="text-sm">اختر وقت الجلسة</label>
  <div className="grid grid-cols-2 gap-2">
    {Object.entries(parsedTimes).map(([period, times]) =>
      Array.isArray(times) &&
      times.map((time) => (
        <button
          key={`${period}-${time}`}
          onClick={() => setSelectedTime(time)}
          className={`py-2 px-3 rounded border text-sm
            ${selectedTime === time ? 'bg-primary text-white' : 'bg-white text-gray-700'}
            hover:bg-primary hover:text-white transition`}
        >
          {period === 'morning' ? 'الصباح' : 'المساء'} - {time}
        </button>
      ))
    )}
  </div>
</div>


        </div>

        <DialogFooter className="col-span-2 flex justify-end">
          <DialogClose asChild>
            <button className="mt-4 px-4 py-2 rounded border border-gray-300 hover:bg-gray-100">Close</button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
