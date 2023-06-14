import React from 'react';
import { useState } from 'react';
import Heading from "./Heading";
import Content from "./Content";
import SearchIcon from "../Asset/SearchIcon.png";

function Dictionary() {
    const [word, setWord] = useState("");
    const [results, setResults] = useState([null]);

    const searchWord = async ()  =>{
      const response = await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + word)


      const data = await response.json();
      setResults(data[0]);
    };
    console.log(results)
    const heading = () => {
      const audio = results?.phonetics.find(phone => phone.audio !== "").audio;
      return {
        audioUrl: audio,
        word: results?.word,
        phonetic: results?.phonetic,
      }
    }
  return (
    <div className="container mx-auto">
        <nav className="my-2 h-14 flex flex-row items-center">
            <h3 className="text-indigo-600 font-bold text-2xl">WordFinder</h3>
        </nav>
            <input type="text"
            value={word}
            onChange={(e) => setWord(e.target.value)}
             className="w-full bg-gray-100 border-none outline-none
             rounded-lg px-3 py-4 shadow-sm" />
            <button className="mx-10 px-3 py-3 rounded-lg" onClick={searchWord}>
               <img src={SearchIcon} width={18} /> 
            Search
            </button>
           
           {results?.meanings?.length > 0 && (
          <>
           <Heading {...heading()} />
            {results.meanings.map((content, index) =>{
              return <Content  {...content} key={index} />
            })}

          </>
          )}
    </div>
  );
}
export default Dictionary;