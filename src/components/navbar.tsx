'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
// import VideoEdit from '@/app/(app)/navbarSectionsPage/VideoEdit';
import HoverComponents from '@/app/(app)/navbarSectionsPage/HoverComponents';


function Navbar() {
  const router=useRouter()
  const [activeItem, setActiveItem] = useState(null);
  const [isMenuOpen,setIsMenuOpen]=useState(false)
  const [currentHover,setCurrentHover] =useState()

  const navHover = (route) => {
    setIsMenuOpen(true)
    console.log(route)
    setCurrentHover(route)
 

  };

  const navHoverLeave = () => {
    setIsMenuOpen(false)
    
  };

  const handleItemClick = (item) => {
    setActiveItem(item);
    router.replace(`/signup`)
  };

  console.log(isMenuOpen)
  const section = ['VideoEdit', 'Poster', 'Website'];

  return ( 
    <>
    <div  className='w-full flex  h-[12%] border-1 shadow-lg sticky  bg-white top-0 z-50'  >
      

      <div className='w-[14%] h-full  bg-red-600'>logo</div>

      <div className='flex justify-evenly  items-center w-[86%]'>

        <div className='h-full flex ml-[4%]  items-center w-[50%] '>
  
          <input className='h-[60%] ml-[2%] pl-3 border-[0.1rem] border-r-0  rounded-xl  rounded-r-none w-full' type="text" placeholder='Search For Products' />
          <div className=' h-[60%]  w-[12%] flex justify-center items-center border-[0.1rem] rounded-r-xl '>Q</div>
        </div>


        <div onMouseLeave={navHoverLeave} className='flex  h-full items-center  ml-[4%]'>
          {section.map((route, index) => (
            <div
              onMouseEnter={()=>navHover(route)}
              key={index}
              className={`mr-8  cursor-pointer ${activeItem === route ? 'bg-red-400' : ''} hover:bg-blue-500`}
              onClick={() => handleItemClick(route)}
            >
              {route}
            </div>
          ))}
        
        </div>  

        <div className='w-[6%] h-[90%] rounded-[100%]  flex justify-center items-center bg-red-400 ' >

         </div>
         
      </div>
    </div>



     {isMenuOpen && <div onMouseEnter={navHover} onMouseLeave={navHoverLeave} className=' fixed mt-2 right-[6%] h-[40%] w-[30%] '>
      <HoverComponents hoverON={currentHover}/>
      </div>}
    </>
  );
}

export default Navbar;
