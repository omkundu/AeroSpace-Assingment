import React from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'
const PostPoo = () => {
  return (
    <div className="flex md:flex-row lg:flex-row flex-col w-full h-screen items-center mt-50 md:mt-0 lg:mt-0">
    <div>
      <img
        src="https://www.aesop.com/u1nb1km7t5q7/2ck6SrjYyPRBPhURWsSMEn/b0e30e9520ff0afd24b9b78a1eeb858e/Aesop_Always_On_Homepage_Secondary_Skin_Care_Blending_Mid_Mobile_640x360px.jpg"
        alt="postpoo"
        style={{ height: '500px', width:"1200px"}}
      />
    </div>
    <div className="flex flex-col md:w-[40%] lg:w-[40%] mr-40 ml-10 md:ml-20 lg:ml-20">
      <p className="text-4xl my-4"> Efficacious pairings</p>
      <p className="font-medium text-lg my-4">
      Our consultants have long combined complementary formulations to effect additional benefits for the skin. Incorporate this time-honoured practice into your regimen with our recommended bundles.
      </p>
      <div className="flex items-center justify-between border border-gray-300 p-4 w-[70%] my-4 hover:bg-black hover:text-white hover:cursor-pointer">
        <p className="font-semibold">Browse kin Care Bundles</p>
        <AiOutlineArrowRight />
      </div>
    </div>
  </div>
  
  
  )
}

export default PostPoo