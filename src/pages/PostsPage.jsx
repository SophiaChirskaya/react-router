// import {useState, useEffect} from "react";
// import axios from "axios";

// export default function PostsPage() {
//     const [posts, setPosts] = useState([]);

//     useEffect(() => {
//         axios.get("http://localhost:3000/posts/")
//         .then((res) => setPosts(res.data))
//         .catch(err => console.log(err));
//     }, []);

//     return (
//         <div className="public-posts">
//             {posts.length === 0 ?
//             <p className="empty-message">Nessun post disponibile</p>
//         : <ul className="posts-list">
//             {posts.map((post) => (
//                 <li className="post" key={post.id}>
//                     <h3>{post.title}</h3>
//                     <p className="content">{post.content}</p>
//                     <img className="img-post" src={post.image} alt={post.title} />
//                 </li>
//             ))}
//             </ul>
//             }

//         </div>
//     );
// }

import BlogsList from "./../components/BlogsList";

export default function PostsPage() {
    return (
        <>
        <h2>Blog di cucina</h2>
        <BlogsList />
        </>
    )
}