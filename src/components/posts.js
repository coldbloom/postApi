import React, {useEffect, useState} from 'react';
import axios from "axios";
import Post from "./Post";

const Posts = () => {
    const [renderFlag, setRenderFlag] = useState(false)
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios
            .get('https://5fb3db44b6601200168f7fba.mockapi.io/api/posts')
            .catch(err =>
                console.log(err))
            .then(response => {
                console.log(response)
                setPosts(response.data)
            })
    }, [renderFlag])

    const deletePost = (postId) => {
        axios
            .delete(`https://5fb3db44b6601200168f7fba.mockapi.io/api/posts/${postId}`)
            .catch(err => {
                console.log(err)
            })
            .then(response => {
                console.log('Пост удалён => ', response.data)
                setRenderFlag(!renderFlag)
            })
    }

    return (
        <div>
            {
                posts.length !== 0
                ?
                    posts.map((item, num) => (
                        <Post key={item.id} id={item.id}  title={item.title} description={item.description} number={num} deletePost={deletePost}/>
                    ))
                : <h1>loading</h1>
            }
        </div>
    );
};

export default Posts;