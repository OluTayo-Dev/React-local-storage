import React from 'react';
import  { useRef } from "react";
import playIcon from '../Asset/playIcon.png';

    function Heading({ audioUrl, word, phonetic}) {
    const ref = useRef();

    const playAudio = () =>{
      ref.current.play();
    }
  return (
 <div className="flex flex-flow justify-between my-5">
     <h3 className="font-bold text-2xl form-serif capitalize">
       {word}
       <span className="block font-normal text-sm text-indigo-600">
       {phonetic}
        </span>
     </h3>
     <button 
     onClick={playAudio}
     className="bg-indigo-100 h-12 w-12  rounded-full flex flex-row items-center justify-center"><img width={18} src={playIcon} />
     </button>

     <audio className="hidden" ref={ref} src={audioUrl} />
</div>
  )
}
export default Heading;