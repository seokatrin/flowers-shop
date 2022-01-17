import React from "react";
import FlowerItem from "./FlowerItem";
import "../styles/main.scss";
import PropTypes from 'prop-types';

function Flowers({ flowers }) {

  return (
    <div className="page__flowers flowers">
      <div className="flowers__container _container">
        <div className="flowers__body">
          {flowers.map((item) => {
            return (
              <FlowerItem
                key={item.id}
                title={item.name}
                price={item.price}
                imgUrl={item.imageUrl}
                id={item.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

Flowers.propTypes = {
  flowers: PropTypes.array
}
Flowers.defaultProps = {
  flowers: []
}

export default Flowers;
