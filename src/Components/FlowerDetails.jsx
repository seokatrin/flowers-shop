import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMatch, useNavigate } from "react-router-dom";
import { getFlowersDetails } from "../redux/flowers";
import { addFlowersToCart } from "../redux/shoppingCart";
import "../styles/main.scss";

function FlowerDetails() {
  const math = useMatch("/:id/");
  const dispatch = useDispatch();
  const flowersDetails = useSelector(({ flowers }) => flowers.flowersDetails);

  useEffect(() => {
    dispatch(getFlowersDetails(math.params.id));
  }, [math.params.id]);

  const addFlowers = () => {
    dispatch(addFlowersToCart(flowersDetails));
  };

  const navigate = useNavigate();
  const handleOnGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="details">
      <div className="blackLine"></div>
      <div className="details__container _container">
        <div className="details__body">
          <div className="details__img">
            <img src={flowersDetails.imageUrl} alt={flowersDetails.name} />
          </div>
          <div className="details__info">
            <div>
              <div className="details__title">{flowersDetails.name}</div>
              <div className="details__price">{flowersDetails.price} руб.</div>
            </div>
            <div className="details__about">
              <span>Состав:</span>
              <span>{flowersDetails.details}</span>
            </div>
            <div className="details__buttons buttons">
              <button className="buttons--black" onClick={addFlowers}>
                в корзину
              </button>
              <button className="buttons--white" onClick={handleOnGoBack}>
                вернуться назад
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlowerDetails;
