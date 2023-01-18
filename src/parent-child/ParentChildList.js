import React, { useState } from "react";
import ParentChildData from './ParentChildData.json'
function ParentChildList(){
  const [expanded, setExpanded] = useState([]);
  const data= ParentChildData;

  const handleClick = (id) => {
    if (expanded.includes(id)) {
      setExpanded(expanded.filter((exp) => exp !== id));
    } else {
      setExpanded([...expanded, id]);
    }
  };

  function renderList(data, level = 0){
    return data.map((item) => {
      const hasChildren = item.children && item.children.length > 0;
      return (
        <div className="parentChild">
        <li key={item.id}>
          <div
            className={`item level-${level} ${
              expanded.includes(item.id) ? "expanded" : ""
            }`}
            onClick={() => handleClick(item.id)}
          >
            {item.name}
            {hasChildren && (
              <span className="arrow">
                {expanded.includes(item.id) ? " -" : " +"}
              </span>
            )}
          </div>
          {hasChildren && expanded.includes(item.id) && (
            <ul>{renderList(item.children, level + 1)}</ul>
          )}
        </li>
        </div>
      );
    });
  };

  return <ul className="parent-child-list">{renderList(data)}</ul>;
};

export default ParentChildList;
