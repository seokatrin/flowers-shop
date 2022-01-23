import React from 'react'
import emptyCartImg from "../img/empty-cart.png";
import PropTypes from 'prop-types';

function EmptyCart({OnGoBackClick}) {
    return (
        <div className="emptyCart">
          <p>Товары в корзине отсутствуют!</p>
          <div className="emptyCart__block">
            <img src={emptyCartImg} alt="empty cart" />
            <div className="buttons">
              <button className="button buttons--white" onClick={OnGoBackClick}>
                вернуться назад
              </button>
            </div>
          </div>
        </div>
    )
}

EmptyCart.propTypes = {
  OnGoBackClick: PropTypes.func.isRequired
}
export default EmptyCart;