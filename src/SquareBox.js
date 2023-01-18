import React, { useState } from "react";


function Square({ id, isSplit, handleOuterClick, handleInnerClick }){
  return (
    <div
      className={`square ${isSplit ? "split" : ""}`}
      onClick={() => handleOuterClick(id)}
    >
      {isSplit && (
        <>
          <div className="inner-square" id={`${id}-0`} onClick={handleInnerClick}></div>
          <div className="inner-square" id={`${id}-1`} onClick={handleInnerClick}></div>
          <div className="inner-square" id={`${id}-2`} onClick={handleInnerClick}></div>
          <div className="inner-square" id={`${id}-3`} onClick={handleInnerClick}></div>
        </>
      )}
    </div>
  );
};

function SquareGrid (){
  const [grid, setGrid] = useState({});

  const handleOuterClick = (id) => {
    setGrid((prev) => ({ ...prev, [id]: !grid[id] }));
  };

  const handleInnerClick = (e) => {
    const id = e.target.id;
    setGrid((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <div className="grid-container">
      <Square id="root" isSplit={grid["root"]} handleOuterClick={handleOuterClick} handleInnerClick={handleInnerClick} />
    </div>
  );
};

export default SquareGrid;
