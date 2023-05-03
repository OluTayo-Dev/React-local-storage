import React, {useEffect, useState} from 'react';



export default function Home() {

  const [input, setInput] = useState('');
  const [data, setData] = useState([]);
   
  const onChangeHandler = (e) => {
    setInput(e.target.value);
  };



  useEffect(() => {
    localStorage.setItem('input', JSON.stringify(input));

  },[input]);


  const savedInput = JSON.parse(localStorage.getItem('input'));



  return (
    <div>
      <input type="text"
       placeholder="Enter username" 
       onChange={onChangeHandler}
        />
        <p>This is the input value {savedInput}</p>
    </div>
  )
}




