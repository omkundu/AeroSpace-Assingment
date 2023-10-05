import React from "react";
import {AiOutlineArrowRight} from 'react-icons/ai' 

const ForAthenaeum = () => {
  return (
    <div className="flex md:flex-row lg:flex-row flex-col w-full h-screen items-center">
      <div className="flex flex-col md:w-[60%] lg:w-[40%] md:mr-40 lg:mr-40 md:ml-20 lg:ml-20 m-4">
        <p className="font-bold text-lg my-2">The Athenaeum</p>
        <p className="text-3xl  my-4"> Ouranon: the sixth Othertopias fragrance</p>
        <p className="font-medium text-lg my-4">Each of the six Othertopias fragrances is a doorway to another realm, real and imagined. Ouranon—a woody, spicy, resinous scent, distinguished by Frankincense, Hay and Myrrh—is the final chapter of that journey. </p>
        <div className="flex items-center justify-between border border-gray-300 p-4 w-[70%] my-4 hover:bg-black hover:text-white hover:cursor-pointer">
            <p className="text-lg">Step inside Ouranon</p>
            <AiOutlineArrowRight />
        </div>
      </div>
      <div className="md:w-[60%]">
  
        <video className="md:w-[400%]" autoPlay loop muted src="https://videos.ctfassets.net/u1nb1km7t5q7/6OYv521nP7i1wAaGz5dhqP/c83a3696a09e71fa09c5a869f9b2c3cf/Aesop_Othertopias_2023_Web_Othertopias_Page_Secondary_4_Mid_Mobile_1920x1080px.mp4"/>
      </div>
    </div>
  );
};

export default ForAthenaeum;
