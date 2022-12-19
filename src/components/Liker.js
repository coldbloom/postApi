import React from 'react';
import axios from "axios";

const Liker = () => {
    const [post, setPost] = React.useState({id: 123, rate: 1});
    const handleLike = (params) => {
        const newRate = post.rate + params

        const newPost = {
            ...post,
            rate: post.rate + params,
            //reaction: params,
        }

    }


    return (
        <div>
            <button onClick={() => handleLike(1)}>send</button>
        </div>
    );
};

export default Liker;