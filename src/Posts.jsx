import { useState } from "react";
import Post from "./Post";


export default function Posts({ post }) {
    const [posts, setPosts] = useState([]);

    useState(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])

    return (
        <div>
            <h3>Load Post: {posts.length} </h3>
            {
                posts.map(post => <Post post={post} ></Post>)
            }
        </div>
    )
}