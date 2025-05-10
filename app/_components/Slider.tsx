"use client";
import { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';

const testimonials = [
    { name: "Ahmed Mohamed", feedback: "This platform helped me find a job that matches my experience.lorem ipsum dolor sit amet consectetur adipisicing elit.lorem ipsum dolor sit amet consectetur adipisicing elit.lorem ipsum dolor sit amet consectetur adipisicing elit." , img:"/users/user-1.jpg"},
    { name: "Sara Ali", feedback: "The training content was very useful in improving my skills.adn I was able to find my dream job through this platform. and I was able to find my dream job through this platform.lorem ipsum dolor sit amet consectetur adipisicing elit.", img:"/users/user-2.jpg"},
    { name: "Mohamed Ali", feedback: "I was able to find my dream job through this platform.lorem ipsum dolor sit amet consectetur adipisicing elit.lorem ipsum dolor sit amet consectetur adipisicing elit.lorem ipsum dolor sit amet consectetur adipisicing elit.", img:"/users/user-3.jpg"},
    { name: "Sara Ali", feedback: "The training content was very useful in improving my skills.lorem ipsum dolor sit amet consectetur adipisicing elit.lorem ipsum dolor sit amet consectetur adipisicing elit.lorem ipsum dolor sit amet consectetur adipisicing elit.", img:"/users/user-2.jpg"},
  ];

export default function Slider() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div className='w-full h-full'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
       
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex gap-4 h-full w-full bg-white">
              <div className='w-[50%]'>
                <img src={item.img} alt={item.name} className='w-[100%]' />
              </div>
                <div className='w-[50%] flex flex-col justify-center items-start p-8'>
                  <h4 className="text-lg font-semibold">{item.name}</h4>
                  <p className="text-sm text-gray-600 text-start">{item.feedback}</p>
                </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
}
