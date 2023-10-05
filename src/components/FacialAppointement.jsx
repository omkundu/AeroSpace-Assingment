import React from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'
const FacialAppointement = () => {
  return (
    <div className="flex md:flex-row lg:flex-row flex-col w-full h-screen items-center mt-50 md:mt-0 lg:mt-0">
    <div>
      <img
        src="https://www.aesop.com/u1nb1km7t5q7/6a0rFYweQvQusUfEHpowUJ/32611c5a1ea838756fd635261d88d2db/Aesop-Generic-Images-Facial-Appointments-1-Mid-Desktop-2560x1440px.jpg"
        alt="postpoo"
        style={{ height: '500px', width:"1200px"}}
      />
    </div>
    <div className="flex flex-col md:w-[40%] lg:w-[40%] mr-40 ml-10 md:ml-20 lg:ml-20">
    <p className="font-semibold text-lg my-4">Facial Appointments</p>
      <p className="text-4xl my-4"> Composure for the skin and senses</p>
      <p className="font-medium text-lg my-4">
      For a well-rounded skin care regimen, Aesop Facial Appointments offer a series of treatments tailored to balance, stimulate and intensely nourish the skin.
      </p>
      <div className="flex items-center justify-between border border-gray-300 p-4 w-[70%] my-4 hover:bg-black hover:text-white hover:cursor-pointer">
        <p className="font-semibold">Learn more</p>
        <AiOutlineArrowRight />
      </div>
    </div>
  </div>
  
  
  )
}

export default FacialAppointement