import {useState} from "react";
import axios from "axios";


    const initialFormData = {
        title: "",
        content: "",
        image: "",
        tags: [],
    };

    const BlogForm = () => {
        const [posts, setPosts] = useState([]);
        const [formData, setFormData] = useState(initialFormData);


        function handleFormData(e) {
            const value = e.target.name === "tags" ? e.target.value.split(",") : e.target.value;

            setFormData((currentFormData) => ({
                ...currentFormData,
                [e.target.name]: value,
            }));
        }

        function handleSubmit(e) {
            e.preventDefault();
            // setPosts((currentPosts) => [...currentPosts, {id: currentPosts[currentPosts.length - 1].id + 1, ...formData}]);
            // setPosts((currentPosts) => [...currentPosts, {
            //     id:
            //     currentPosts.length === 0 ? 1 : currentPosts[currentPosts.length - 1].id + 1,
            //     ...formData
            // }]);

            // Chiamata API in POST inviando dati nuovo post
            axios.post("http://localhost:3000/posts", formData)
            .then(res => {
            // Uso la risposta API per creare nuovo array dei posts
                setPosts((currentPosts) => [...currentPosts, res.data])
            }
        )
        .catch(err => console.log(err))

            setFormData(initialFormData);
        }


        return (
            <>
            <h2>Dati del blog</h2>
            <form id="formpost" action="#" onSubmit={handleSubmit}>
                <input
                type="text"
                name="title"
                onChange={handleFormData}
                value={formData.title}
                placeholder="Titolo blog"
                 />

                <textarea
                name="content"
                onChange={handleFormData}
                value={formData.content}
                placeholder="Contenuto del blog"
                ></textarea>

                <input
                type="text"
                name="image"
                onChange={handleFormData}
                value={formData.image}
                placeholder="Imagine"
                 />

                <input
                type="text"
                name="tags"
                onChange={handleFormData}
                value={formData.tags}
                placeholder="Tags"
                 /> 
                 <button>AGGIUNGI POST</button>
            </form>

            </>
        )



    }

    export default BlogForm