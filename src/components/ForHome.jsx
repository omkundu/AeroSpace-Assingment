import React, { useState, useRef } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { AiOutlineArrowRight } from 'react-icons/ai';

const ForHome = () => {
    const skincare = [
        {
          img: "https://www.aesop.com/u1nb1km7t5q7/5vuGB9OlPfCwhd0di4sqjF/8c66786e2c82846e7e86c2e234c7c0e5/Aesop_Kits_Parsley_Seed_Anti-Oxidant_Skin_Care_Kit_Web_Large_1584x962px.png",
          name: 'Post-Poo Drops',
          desc: 'A botanical bathroom deodoriser',
          height : "300px"
        },
        {
          img: "https://www.aesop.com/u1nb1km7t5q7/4fclKcB1FNLpV5wHmZkAQ6/c6c62862184703d834efbc07077b86cb/Aesop_Skin_Parsley_Seed_Anti-Oxidant_Eye_Cream_10mL_Web_Large_901x478px.png",
          name: 'Aganice Aromatique Candle',
          desc: 'Cardamom, Mimosa, Tobacco',
          height : "200px"
        },
        {
          img: "https://www.aesop.com/u1nb1km7t5q7/5T3H9UXxNE9yT2Na2kjXvW/71d804effdc8b27b1aced97e1781f1ec/Aesop-Skin-Parsley-Seed-Facial-Cleansing-Oil-200mL-large.png",
          name: 'Bronze Incense Holder',
          desc: 'Suited to any interior ',
          height : "400px"
        },
        {
          img: 'https://www.aesop.com/u1nb1km7t5q7/1pr54VIGFr7VyVW9UXGXm4/0eeedad1ea45c86f45ce8c724bfbc4cb/Aesop-Skin-Parsley-Seed-Anti-Oxidant-Facial-Hydrating-Cream-60mL-large.png',
          name: 'Murasaki Aromatique Incense',
          desc: 'For those who favour aromas of warm spice ',
          height : "200px"
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
        <p className="font-semibold text-lg my-4">Parsley Seed Skin Care</p>
        <p className="text-3xl my-2">Fortification of the highest order</p>
        <p className="my-6 break-normal text-lg">
        Our Parsley Seed Skin Care range provides potent doses of anti-oxidant rich ingredients in formulations suited to all skin types. They are especially recommended for those in urban environments, to fortify the skin against the damaging effects of free radicals.
        </p>
        <div className="flex items-center justify-between w-[40%]">
          <p className='text-lg'>Explore the range</p>
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
  )
}

export default ForHome