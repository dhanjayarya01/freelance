'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Menmenu from '@/app/(app)/navbarSectionsPage/men.menu';


function Navbar() {
  const router=useRouter()
  const [activeItem, setActiveItem] = useState(null);
  const [isMenuOpen,setIsMenuOpen]=useState(false)
  const [currentRoute,setCurrentRoute] =useState()

  const navHover = (route) => {
    setIsMenuOpen(true)
    console.log(route)
    setCurrentRoute(route)


  };

  const navHoverLeave = () => {
    setIsMenuOpen(false)
  };

  const handleItemClick = (item) => {
    setActiveItem(item);
    router.replace(`/signup`)
  };

  const section = ['men', 'women', 'mer'];

  return ( 
    <>
    <div className='w-full flex  h-[12%] border-1 shadow-lg sticky pl-[2%] bg-white top-0 z-50'  onMouseLeave={navHoverLeave}>
      <div className='w-[12%] h-full  bg-red-600'>logo</div>

      <div className='flex  items-center w-[88%]'>
        <div className='h-full flex ml-[12%]  items-center w-[50%] '>
  
          <input className='h-[60%] ml-[2%] pl-3 border-[0.1rem] border-r-0  rounded-xl  rounded-r-none w-full' type="text" placeholder='Search For Products' />
          <div className=' h-[60%]  w-[12%] flex justify-center items-center border-[0.1rem] rounded-r-xl '>Q</div>
        </div>
        <div className='flex ml-[4%]'>
          {section.map((route, index) => (
            <div
            
              onMouseEnter={()=>navHover(route)}
              onMouseLeave={navHoverLeave}
              key={index}
              className={`mr-8  cursor-pointer ${activeItem === route ? 'bg-red-400' : ''} hover:bg-blue-500`}
              onClick={() => handleItemClick(route)}
            >
              {route}
            </div>
          ))}
        </div>
      </div>
    </div>



     {isMenuOpen && <div className=' fixed left-[12%] h-[40%] w-[40%] '>
      <Menmenu/>
      </div>}
    </>
  );
}

export default Navbar;
