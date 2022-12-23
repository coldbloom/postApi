import React, {useEffect, useState} from 'react';
import axios from "axios";
import Post from "./post/Post";

const Posts = ({renderFlag, setRenderFlag}) => {
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

    const handleLikeChange = (postId) => {
        axios
            .put(`https://5fb3db44b6601200168f7fba.mockapi.io/api/posts/${postId}`)
            .catch(err => {
                console.log(err)
            })
            .then(response => {
                console.log('запрос успешно изменен!', response.data)
                setRenderFlag(!renderFlag)
            })
    }

    return (
        <div>
            {
                posts.length !== 0
                ?
                    posts.map((item, num) => (
                        <Post
                            {...item}
                            number={num}
                            deletePost={deletePost}
                            setRenderFlag={setRenderFlag}
                            renderFlag={renderFlag}
                        />
                    ))
                : <h1>loading</h1>
            }
        </div>
    );
};

export default Posts;