import React, { useState } from 'react';
import axios from 'axios';



export default function Axios() {
    const [post, setPost] = useState([]);

 const fetchData = () => {
    axios
    .get("https://jsonplaceholder.typicode.com/posts?_limit=10")
    .then((res) => {
        console.log(res.data)
    })
 
 };
    return (
        <div>Axios</div>
    )
}