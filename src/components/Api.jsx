import React, { useEffect, useState } from'react';

//FETCH METHOD
//post data
export default function Api() {
    const [post, setPost] = useState([]);
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");


const addPosts = async (title, body) => {
    await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({
            title: title,
            body: body,
            userId: Math.random().toString(36).slice(2),
        }),
        headers: {
            'Content-type' : 'application/json; charset=UTF-8',
        },
    })
    .then((response) => response.json())
    .then((data) =>{
        setPost((posts) => [data, ...posts]);
        setTitle("");
        setBody("");
    })
    .catch((err) =>{
        console.log(err.message);
    })
};

const handleSubmit = (e) => {
    e.preventDefault();
    addPosts(title, body);
};

//delete data
const deletePost = async(id) => {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: "DELETE",
    }).then((response) => {
        if (response.status === 200) {
            setPost(
                post.filter((item) =>{
                    return item.id !==id;
                })
            );
        } else {
            return;
        }
    });
};


return (
    <div>
        {/* fetch data */}
        {post.map((items) =>{
            return (
                <div key={items.id}>
                    <p>Title = {items.title}</p>
                    <p>Id = {items.id}</p>
                    <p>{items.body}</p>

                    <div className="">
                        <button
                        className=""
                        onClick={() => deletePost(post.id)}
                        >
                            Delete
                        </button>

                    </div>
                </div>
            )
        })}
        {/* post data */}
        <div className="">
            <div className="">
                <form onSubmit={handleSubmit}>
                    <input
                      type="text"
                      className=""
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      />
                      <textarea
                          name=""
                          id=""
                          cols="5"
                          rows="4"
                          value={body}
                          onChange={(e) => setBody(e.target.value)}
                          ></textarea>
                          <button type="submit">Add Post</button>
                </form>
            </div>
        </div>
    </div>
  );
}

//Get Method

// export default function Api() {
//     const [post, setPost] = useState([])

//     useEffect(() => {
//         fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
//         .then((response) => response.json())
//         .then((data) => {
//             console.log(data);
//             setPost(data);
//         })
//         .catch((err) =>{ 
//             console.log(err.message);
//         })
//     }, [])
    
//   return (
//     <div>
//        {post.map((items) =>{
//         return(
//         <div key={items.id}>
//             <p>Title = {items.title}</p>
//             <p>Id = {items.id}</p>
//             <p>{items.body}</p>
//         </div>
//     )
//    })}
//     </div>
//   );
// }