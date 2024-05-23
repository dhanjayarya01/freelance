import React from 'react';
import VideoEdit from '@/app/(app)/navbarSectionsPage/VideoEdit';
import Poster from '@/app/(app)/navbarSectionsPage/Poster';
import Website from '@/app/(app)/navbarSectionsPage/Website';

function HoverComponents({ hoverON }) {
  let ComponentToRender = null;

  switch (hoverON) {
    case 'VideoEdit':
      ComponentToRender = VideoEdit;
      break;
    case 'Poster':
      ComponentToRender = Poster;
      break;
    case 'Website':
      ComponentToRender = Website;
      break;
    default:
      ComponentToRender = null;
  }

  return (
    <div className=" h-[100%] w-full ">
      {ComponentToRender && <ComponentToRender />}
    </div>
  );
}

export default HoverComponents;
