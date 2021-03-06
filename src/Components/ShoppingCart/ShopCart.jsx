import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  decreaseFlowersToCart,
  deleteFlowersFromCart,
  increaseFlowersToCart,
} from "../../redux/shoppingCart";
import "../../styles/main.scss";
import ShopCartItem from "./ShopCartItem";
import EmptyCart from "./EmptyCart";

function ShopCart() {
  const dispatch = useDispatch();
  const { cart: flowers, totalFlowersPrice } = useSelector(
    ({ shoppingCart }) => ({
      cart: shoppingCart.cart,
      totalFlowersPrice: shoppingCart.totalFlowersPrice,
    })
  );
  const navigate = useNavigate();
  const handleOnGoBackClick = () => {
    navigate(-1);
  };

  const onPlusClick = (id) => {
    dispatch(increaseFlowersToCart(id));
  };
  const onMinusClick = (id) => {
    dispatch(decreaseFlowersToCart(id));
  };
  const onRemoveClick = (id) => {
    dispatch(deleteFlowersFromCart(id));
  };

  return (
    <div className="shopCart">
      <div className="blackLine"></div>
      {flowers.length > 0 ? (
        <div className="shopCart__container _container">
          <p className="shopCart__title">
            {flowers.length > 0 ? "Оформление заказа" : "Карзина пока пуста"}
          </p>
          {flowers.map((item) => (
            <ShopCartItem
              flower={item}
              key={item.id}
              onPlusClick={onPlusClick}
              onMinusClick={onMinusClick}
              onRemoveClick={onRemoveClick}
            />
          ))}
          <div className="shopCart__total">Итого: {totalFlowersPrice} руб.</div>
          <div className="shopCart__buttons buttons">
            <button
              className="button buttons--white"
              onClick={handleOnGoBackClick}
            >
              вернуться назад
            </button>
            <Link to="/form" className="button buttons--black">
              оформить
            </Link>
          </div>
        </div>
      ) : (
        <EmptyCart OnGoBackClick={handleOnGoBackClick} />
      )}
    </div>
  );
}

export default ShopCart;
