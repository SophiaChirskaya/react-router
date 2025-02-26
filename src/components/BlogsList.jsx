import {useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";


    const BlogsList = () => {
        const [posts, setPosts] = useState([]);
        

        function fetchPosts() {
          axios.get("http://localhost:3000/posts")
          .then((res) =>
            setPosts(res.data)
          
        )
        }

        useEffect(fetchPosts, []);

        const removePost = i => {
            const updatedPosts = posts.filter((post,index) => {
              return index != i
            });

            // Chiamata API in DELETE
            axios.delete(`http://localhost:3000/posts/${i}`)
            .then(res =>
                console.log(res),
                setPosts(updatedPosts)    
            )
            .catch(err => console.log(err)
            )


          }

        return (
            <>

            {
                posts.map((post, I) => (
                    <div className="postItem" key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.content}</p>
                        <img className="img-post" src={post.image} alt={post.title} />
                        <h2>{post.tags.join(", ")}</h2>
                        <Link to={`/posts/${post.id}`}>Vai al dettaglio</Link>

                        <button onClick={() => removePost(post.id)}>CANCELLA POST</button>
                    </div>

                ))
            }
            </>
        )



    }

    export default BlogsList