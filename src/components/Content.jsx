import React from 'react'

   function Content ({ partOfSpeech, definitions, synonyms }) {
  return (
    <div className="my-3">
                <div className="flex flex-row item-center text-lg font-bold font-serif" >
                    <p>{partOfSpeech}</p>
                    <hr className="w-full ml-10" />
                </div>
                <p className="text-gray-80 mt-3 font-semibold0">Meaning</p>
                <ul className="list-disc px-10 text-gray-800 text-sm space-y-2">
                  { definitions.map((def,index) => (
                    <li key={index}>{def.definition}</li>
                  ))}
                </ul>

                {
                  synonyms.length > 0 && (
             
                <p className="text-gray-800 text-sm gap-4 my-2">
                    Synonyms:{" "}
                    { synonyms.map((synonyms, index)=>(
                    <span key={index} className="text-indigo-500  mx-1">{synonyms}</span>
                    ))}
                </p>
                 )}
            </div>
        
  );
};
export default Content;