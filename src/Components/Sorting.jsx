import React, { useRef } from "react";
import cn from "classnames";
import "../styles/main.scss";
import { useWindowEvent } from "../useWindowEvent";
import PropTypes from "prop-types";

const sortBy = [
  { name: "популярности", type: "rating", order: "desc" },
  { name: "возврастанию цены", type: "price", order: "asc" },
  { name: "убыванию цены", type: "price", order: "desc" },
];

function Sorting({ setSorting, activeSortBy }) {
  const ref = useRef();
  const [windowIsOpen, setwindowIsOpen] = useWindowEvent(ref);

  const activeSortName = sortBy.find(
    (item) =>
      item.type === activeSortBy.type && item.order === activeSortBy.order
  );

  const handleOnClickSort = (sortBy) => {
    setSorting(sortBy);
    setwindowIsOpen(false);
  };

  const handleOnClickPopup = () => {
    setwindowIsOpen(!windowIsOpen);
  };
  return (
    <div className="page__sort sort">
      <div className="sort__container _container">
        <div className="sort__body" ref={ref}>
          <svg
            className={cn({ active: windowIsOpen })}
            width="6"
            height="5"
            viewBox="0 0 6 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M3 5L5.88675 0H0.113249L3 5Z" fill="black" />
          </svg>
          <p>
            Сортировка по:
            <span onClick={handleOnClickPopup}> {activeSortName.name}</span>
          </p>
          {windowIsOpen && (
            <div className="sort__window window">
              <ul>
                {sortBy.map((item) => (
                  <li
                    onClick={() =>
                      handleOnClickSort({ type: item.type, order: item.order })
                    }
                    key={item.name}
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

Sorting.propTypes = {
  setSorting: PropTypes.func.isRequired,
  activeSortBy: PropTypes.object.isRequired,
};
Sorting.defaultProps = {
  activeSortBy: { name: "популярности", type: "rating", order: "desc" },
};

export default Sorting;
