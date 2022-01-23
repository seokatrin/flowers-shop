import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import '../../styles/main.scss';

function ShopCartLink() {
  const count = useSelector(({shoppingCart}) => shoppingCart.totalFlowersCount)
  
  return (
    <div className="header__shopCart">
      <Link to={"/shopcart"}>
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.89407 6.28906C5.24211 6.28906 5.52458 6.00906 5.52458 5.66406V3.22656C5.52458 2.13688 6.41897 1.25 7.51827 1.25C8.61758 1.25 9.51228 2.13688 9.51228 3.22656V5.66406C9.51228 6.00906 9.79444 6.28906 10.1428 6.28906C10.4908 6.28906 10.7733 6.00906 10.7733 5.66406V3.22656C10.7736 1.4475 9.31335 0 7.51827 0C5.72382 0 4.26355 1.4475 4.26355 3.22656V5.66406C4.26355 6.00906 4.54602 6.28906 4.89407 6.28906Z"
            fill="black"
          />
          <path
            d="M14.7509 4.88469H11.4041V5.66406C11.4041 6.35344 10.8386 6.91406 10.1431 6.91406C9.44765 6.91406 8.88208 6.35344 8.88208 5.66406V4.88469H6.15542V5.66406C6.15542 6.35344 5.58984 6.91406 4.89438 6.91406C4.19893 6.91406 3.63335 6.35344 3.63335 5.66406V4.88469H0.249057C0.0750344 4.88469 -0.0324686 5.02063 0.00883024 5.18813L2.21501 14.0934C2.34804 14.5941 2.87957 15 3.40164 15H11.5983C12.121 15 12.6519 14.5941 12.7856 14.0934L14.9912 5.18813C15.0325 5.02031 14.9253 4.88469 14.7509 4.88469Z"
            fill="black"
          />
        </svg>
      </Link>
      {count > 0 && <div className="header__count">{count}</div>}
    </div>
  );
}

export default ShopCartLink;
