import React, { useState, useRef } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { AiOutlineArrowRight } from 'react-icons/ai';

const ForSkin = () => {
  const skincare = [
    {
      img: "https://www.aesop.com/u1nb1km7t5q7/5JnjTiylieRSYutnMFeyVK/0c78718d9172cd5384064512e06f0b52/Aesop_Fragrance_Gloam_Eau_de_Parfum_50mL_Web_Front_Large_900x878px.png",
      name: 'Ouranon Eau de Parfum',
      desc: 'Woody, spicy,resinous',
      height : "500px"
    },
    {
      img:"https://www.aesop.com/u1nb1km7t5q7/5JnjTiylieRSYutnMFeyVK/0c78718d9172cd5384064512e06f0b52/Aesop_Fragrance_Gloam_Eau_de_Parfum_50mL_Web_Front_Large_900x878px.png",
      name: 'Gloam Eau de Parfum',
      desc: "Floral,spice,green",
      height : "500px"
    },
    {
      img: "https://www.aesop.com/u1nb1km7t5q7/5JnjTiylieRSYutnMFeyVK/0c78718d9172cd5384064512e06f0b52/Aesop_Fragrance_Gloam_Eau_de_Parfum_50mL_Web_Front_Large_900x878px.png",
      name: 'Ouranon Eau de Parfum',
      desc: 'Floral,spice,green',
      height : "500px"
    },
    {
      img: "https://www.aesop.com/u1nb1km7t5q7/5JnjTiylieRSYutnMFeyVK/0c78718d9172cd5384064512e06f0b52/Aesop_Fragrance_Gloam_Eau_de_Parfum_50mL_Web_Front_Large_900x878px.png",
      name: 'Ouranon Eau de Parfum',
      desc: 'Floral,spice,green',
      height : "500px"
    },
    {
      img: "https://www.aesop.com/u1nb1km7t5q7/5JnjTiylieRSYutnMFeyVK/0c78718d9172cd5384064512e06f0b52/Aesop_Fragrance_Gloam_Eau_de_Parfum_50mL_Web_Front_Large_900x878px.png",
      name: 'Ouranon Eau de Parfum',
      desc: 'Floral,spice,green',
      height : "500px"
    },
    {
      img: "https://www.aesop.com/u1nb1km7t5q7/5JnjTiylieRSYutnMFeyVK/0c78718d9172cd5384064512e06f0b52/Aesop_Fragrance_Gloam_Eau_de_Parfum_50mL_Web_Front_Large_900x878px.png",
      name: 'Ouranon Eau de Parfum',
      desc: 'Floral,spice,green',
      height : "500px"
    },
    {
      img: "https://www.aesop.com/u1nb1km7t5q7/5JnjTiylieRSYutnMFeyVK/0c78718d9172cd5384064512e06f0b52/Aesop_Fragrance_Gloam_Eau_de_Parfum_50mL_Web_Front_Large_900x878px.png",
      name: 'Ouranon Eau de Parfum',
      desc: 'Floral,spice,green',
      height : "500px"
    },
    {
      img: "https://www.aesop.com/u1nb1km7t5q7/5JnjTiylieRSYutnMFeyVK/0c78718d9172cd5384064512e06f0b52/Aesop_Fragrance_Gloam_Eau_de_Parfum_50mL_Web_Front_Large_900x878px.png",
      name: 'Ouranon Eau de Parfum',
      desc: 'Floral,spice,green',
      height : "500px"
    },
  ];

  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollContainerRef = useRef(null);

  const handleScroll = (scrollOffset) => {
    if (scrollContainerRef.current) {
      const newScrollPosition = scrollPosition + scrollOffset;
      setScrollPosition(newScrollPosition);
      scrollContainerRef.current.scrollTo({ left: newScrollPosition });
    }
  };

  return (
    <div className="flex items-center">
      <div>
        {scrollPosition > 0 ? <div className="bg-black p-6 text-white hover:cursor-pointer"  onClick={() => handleScroll(-600)}>
          <IoIosArrowBack
            size={30}
           
          />
        </div> :""}
        
      </div>
      <div className="flex"
      ref={scrollContainerRef}
      style={{
        overflowX: 'hidden', // Hide the scrollbar
       
        position: 'relative', // Needed for absolute positioning of arrows
        scrollBehavior: 'smooth', // Add smooth scrolling
      }}>
        <div className="mt-24 ml-20 w-[35%] flex-shrink-0">
          <p className="font-semibold my-4">Fragrance</p>
          <p className="text-2xl my-2">Our personal scents</p>
          <p className="my-6 break-normal text-lg">
          Unorthodox, evocative, and refined, Aesop fragrances are sensory bridges to memory and connection points to those around us.
          </p>
          <div className="flex items-center justify-between w-[30%]">
            <p>See all Skin Care</p>
            <AiOutlineArrowRight />
          </div>
        </div>

        <div className="flex mt-48 items-baseline">
          {skincare.map((skincareItem, index) => (
            <div className="flex flex-col items-center flex-shrink-0" key={index}>
              <img src={skincareItem.img} alt="soap"   style={{ height: skincareItem.height }}/>
              <p className="text-lg font-semibold">{skincareItem.name}</p>
              <p className='text-base'>{skincareItem.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        {scrollPosition > 2400 ? "" :<div className="bg-black p-6 text-white hover:cursor-pointer" onClick={() => handleScroll(600)}>
          <IoIosArrowForward
            size={30}
              
          />
        </div>}
        
      </div>
    </div>
  );
};

export default ForSkin;

