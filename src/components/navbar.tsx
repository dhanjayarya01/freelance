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
    <div className='w-full flex h-[12%] bg-slate-600' onMouseLeave={navHoverLeave}>
      <div className='w-[12%] h-full bg-red-600'>logo</div>

      <div className='flex justify-center items-center'>
        <div className='flex'>
          {section.map((route, index) => (
            <div
              onMouseEnter={()=>navHover(route)}
              onMouseLeave={navHoverLeave}
              key={index}
              className={`mr-2 cursor-pointer ${activeItem === route ? 'bg-red-400' : ''} hover:bg-blue-500`}
              onClick={() => handleItemClick(route)}
            >
              {route}
            </div>
          ))}
        </div>
      </div>
    </div>

     {isMenuOpen && <div className=' absolute left-[12%] h-[40%] w-[40%] '>
      <Menmenu/>
      </div>}
    </>
  );
}

export default Navbar;
