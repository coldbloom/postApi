import React from 'react';
import {FaHeart} from 'react-icons/fa'
import {FaTrashAlt} from 'react-icons/fa'
import axios from "axios";

const Post = ({title, description, number, deletePost, handleLikeChange, id}) => {

    return (
        <div className='py-5'>
            <div className='flex flex-row px-2'>
                <div>
                    <h3 className='text-xl font-semibold'>{number + ' ' + title}</h3>
                </div>
            </div>
            <div className='px-6 py-2 flex flex-row'>
                <p className='text-lg'>{description}</p>
                <FaTrashAlt
                    onClick={() => deletePost(id)}
                    size={56}
                    className=''
                />
            </div>
            <div className='px-2 '>
                <FaHeart
                    size={22}
                    onClick={() => handleLikeChange(id)}
                />
            </div>
        </div>
    );
};

export default Post;