import React from "react";
import cn from "classnames";

function Paginator({ activePage, itemsCount, onPageClick, pageLimit }) {
  const pageCount = Math.ceil(itemsCount / pageLimit);
  const pages = [];
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }
  return (
    <div className="paginator">
      {pages.map((item, index) => (
        <div
          onClick={() => onPageClick(index)}
          key={item}
          className={cn("paginator__item", { active: activePage === index })}
        >
          {item}
        </div>
      ))}
    </div>
  );
}

export default Paginator;
