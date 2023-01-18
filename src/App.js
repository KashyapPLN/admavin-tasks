import ElementTransfer from './ElementTransfer/ElementTransfer';
import InfiniteScroll from './Infinite-Scroll/InfiniteScroll';
import './App.css';
import BoxGame from './box-game/BoxGame';
import NavBar from './NavBar';
import ParentChildList from './parent-child/ParentChildList';
import { Routes, Route } from "react-router-dom";
import SquareGrid from './SquareBox';

function App() {
  return (
    <div className="App">

      <NavBar />
      
     <Routes>
     <Route path="/" element={<Home/>} />
   <Route path="/scroll" element={<InfiniteScroll/>} />
   <Route path="/parentchild" element={<ParentChildList/>} />
   <Route path="/game" element={<BoxGame/>} />
   <Route path="/element" element={<ElementTransfer/>} />
   <Route path="/box" element={<SquareGrid />} />
   </Routes>
    </div>
  );
}

export default App;
function Home(){
  return(<h3 className='text'>Please Click on the component titles mentioned in the Nav Bar to navigate to the tasks.</h3>)
}