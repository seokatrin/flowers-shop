import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useWindowEvent } from "../../useWindowEvent";

function Research() {
  const allFlowers = useSelector(({ flowers }) => flowers.flowersForResearch);

  const ref = useRef()
  
  const [researchIsOpen, setResearchIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [matchedFlowers, setmatchedFlowers] = useState([]);
  const [windowIsOpen, setwindowIsOpen] = useWindowEvent(ref);

  const handleOnClickPopup = () => {
    setResearchIsOpen(!researchIsOpen);
    setmatchedFlowers([])
  };
  const handleOnClickLink = () => {
    setwindowIsOpen(false)
  }
  const handleOnChange = (e) => {
    setInputValue(e.target.value);
    if(e.target.value.length > 0) {
      const flowers = allFlowers.filter((item) =>
      item.name.toLowerCase().includes(e.target.value.toLowerCase())
      
    );
    if(flowers.length > 0) {
      setmatchedFlowers(flowers);
      setwindowIsOpen(true)
    }
  } else {
    setwindowIsOpen(false)
  }
}

  return (
    <div className="header__research">
      {researchIsOpen && (
        <div ref={ref}>
          <input
            placeholder="Поиск..."
            value={inputValue}
            onChange={handleOnChange}
          />
          {windowIsOpen && (
            <div className="header__window window" >
              {matchedFlowers.map((item) => (
                <Link to={`/${item.id}`} key={item.id} onClick={handleOnClickLink}>
                  {item.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      )}
      <svg
        onClick={handleOnClickPopup}
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.6339 12.8664L11.4607 9.69323C12.1164 8.70509 12.5001 7.52195 12.5001 6.25006C12.5001 2.80378 9.69635 0 6.25006 0C2.80378 0 0 2.80378 0 6.25006C0 9.69635 2.80378 12.5001 6.25006 12.5001C7.52195 12.5001 8.70509 12.1164 9.69323 11.4607L12.8664 14.6339C13.3539 15.122 14.1464 15.122 14.6339 14.6339C15.122 14.1458 15.122 13.3545 14.6339 12.8664ZM1.87502 6.25006C1.87502 3.83754 3.83754 1.87502 6.25006 1.87502C8.66259 1.87502 10.6251 3.83754 10.6251 6.25006C10.6251 8.66259 8.66259 10.6251 6.25006 10.6251C3.83754 10.6251 1.87502 8.66259 1.87502 6.25006Z"
          fill="black"
        />
      </svg>
    </div>
  );
}

export default Research;
