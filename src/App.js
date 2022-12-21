import './App.css';
import Liker from "./components/Liker";
import Posts from "./components/posts";
import AddPost from "./components/AddPost";

function App() {

  return (
    <div className='container'>
        {/*<Liker />*/}
        <AddPost />
        <Posts />
    </div>
  );
}

export default App;
