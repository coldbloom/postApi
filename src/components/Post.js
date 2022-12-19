import React from 'react';

const Post = ({title, description, number, deletePost, id}) => {
    return (
        <div>
            <div className='flex flex-row'>
                <div>
                    <h3 className='text-xl font-bold mr-10'>{number} Post</h3>
                    <h4 className='text-lg font-semibold underline'>{title}</h4>
                </div>
                <button
                    onClick={() => deletePost(id)}
                    className='bg-red-600 rounded px-2 py-0 ml-10'>
                    delete
                </button>
            </div>
            <div className='px-6 py-2'>
                <p className='text-lg'>{description}</p>
            </div>
        </div>
    );
};

export default Post;