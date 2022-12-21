import React from 'react';
import {AiFillCloseCircle} from 'react-icons/ai'
import cn from 'classnames'

const ModalWindow = ({modalShow, setShow}) => {
    const [text, setText] = React.useState('')
    return (
        <div className={cn('fixed top-0 pt-10 w-full h-full flex justify-center bg-black opacity-70', {
            'visible': modalShow === true,
            'hidden': modalShow === false
        })}>
            <div className='bg-white relative px-10 py-6 h-1/5 rounded-lg flex flex-col'>
                <AiFillCloseCircle className='' onClick={() => setShow(false)}/>
                <p className='font-semibold text-black text-center'>Создание поста</p>
                <input
                    className=' border-2 rounded-lg px-1 py-1'
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </div>
        </div>
    );
};

export default ModalWindow;