import './App.css';
import Liker from "./components/Liker";
import Posts from "./components/posts";
import AddPost from "./components/AddPost";
import {useState} from "react";

function App() {
    const [renderFlag, setRenderFlag] = useState(false)

    return (
        <div className='container'>
            {/*<Liker />*/}
            <AddPost setRenderFlag={setRenderFlag} renderFlag={renderFlag}/>
            <Posts setRenderFlag={setRenderFlag} renderFlag={renderFlag}/>
        </div>
    );
}

export default App;
