import React from 'react';
import {FaHeart} from 'react-icons/fa'
import {FaTrashAlt} from 'react-icons/fa'
import axios from "axios";
import s from './Post.module.css'
import cn from 'classnames'

const Post = ({id, title, description, liked, number, deletePost, setRenderFlag, renderFlag}) => {

    const handleLikeChange = (postId) => {
        const newPost = {
            title: title,
            description: description,
            liked: !liked,
        }
        axios
            .put(`https://5fb3db44b6601200168f7fba.mockapi.io/api/posts/${postId}`, newPost)
            .catch(err => {
                console.log(err)
            })
            .then(response => {
                console.log('запрос успешно изменен!', response.data)
                setRenderFlag(!renderFlag)
            })
    }

    return (
        <div className='py-5 lg:px-10 px-2'>
            <div className='flex flex-row px-2'>
                <div>
                    <h3 className='text-xl font-semibold'>{number + ' ' + title}</h3>
                </div>
            </div>
            <div className='px-6 py-2 flex flex-row '>
                <div className={s.descriptionBox}>
                    <p className='text-lg'>
                        {description}
                    </p>
                </div>
                <div className={s.trashBox}>
                    <FaTrashAlt
                        size={22}
                        onClick={() => deletePost(id)}
                    />
                </div>
            </div>
            <div className={s.trashBox}>
                <FaHeart
                    size={22}
                    color={liked ? "red" : "black"}
                    onClick={() => handleLikeChange(id)}
                />
            </div>
        </div>
    );
};

export default Post;