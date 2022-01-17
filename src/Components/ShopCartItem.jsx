import React from "react";
import PropTypes from "prop-types";

const ShopCartItem = ({ flower, onPlusClick, onMinusClick, onRemoveClick }) => {
  const handleOnPlusClick = () => onPlusClick(flower.id);
  const handleOnMinusClick = () => {
    if (flower.totalCount > 1) {
      onMinusClick(flower.id);
    }
  };
  const handleOnRemoveClick = () => onRemoveClick(flower.id);
  return (
    <div className="shopCart__body">
      <div className="shopCart__main">
        <div className="shopCart__img">
          <img src={flower.imgUrl} alt={flower.title} />
        </div>
        {flower.title}
      </div>
      <div className="shopCart__info">
        <span>{flower.price} руб.</span>
        <div className="shopCart__numbers">
          <span onClick={handleOnMinusClick}>-</span>
          <span>{flower.totalCount}</span>
          <span onClick={handleOnPlusClick}>+</span>
        </div>
        {flower.totalPrice} руб.
        <button onClick={handleOnRemoveClick} className="shopCart_deleteBtn">
          x
        </button>
      </div>
    </div>
  );
};

ShopCartItem.propTypes = {
  flower: PropTypes.object.isRequired,
  onPlusClick: PropTypes.func.isRequired,
  onMinusClick: PropTypes.func.isRequired,
  onRemoveClick: PropTypes.func.isRequired,
};
ShopCartItem.defaultProps = {
  flower: []
}
export default ShopCartItem;