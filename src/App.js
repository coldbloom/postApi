import './App.css';
import Liker from "./components/Liker";
import Posts from "./components/posts";

function App() {

  return (
    <div className='container'>
        <Liker />
        <Posts />
    </div>
  );
}

export default App;
