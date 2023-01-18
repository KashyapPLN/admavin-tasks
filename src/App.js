import ElementTransfer from './ElementTransfer/ElementTransfer';
import InfiniteScroll from './Infinite-Scroll/InfiniteScroll';
import SquareBox from './SquareBox';
import './App.css';
import BoxGame from './box-game/BoxGame';
import NavBar from './NavBar';
import ParentChildList from './parent-child/ParentChildList';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <ElementTransfer /> */}
   {/* <InfiniteScroll /> */}

   {/* <SquareBox /> */}
   {/* <BoxGame/> */}

   <Routes>
   <Route path="/scroll" element={<InfiniteScroll/>} />
   <Route path="/parentchild" element={<ParentChildList/>} />
   <Route path="/game" element={<BoxGame/>} />
   <Route path="/element" element={<ElementTransfer/>} />
   <Route path="/box" element={<SquareBox/>} />
   </Routes>
    </div>
  );
}

export default App;
