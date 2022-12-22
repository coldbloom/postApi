import React, {useState} from 'react';
import ModalWindow from "./modalWindow";

const AddPost = ({setRenderFlag, renderFlag}) => {
    const [show, setShow] = useState(false)
    return (
        <>
            <div>
                <h1>Блог</h1>
                <div
                    onClick={() => setShow(true)}
                    className='rounded-lg bg-black text-white py-1 w-52 flex justify-center '
                >Создать новый пост</div>
            </div>
            <ModalWindow
                modalShow={show}
                setShow={setShow}
                setRenderFlag={setRenderFlag}
                renderFlag={renderFlag}
            />
        </>
    );
};

export default AddPost;