import React from "react";
import rose from "../img/header/rose.jpg";
import "../styles/main.scss";
import cn from "classnames";
import PropTypes from "prop-types";

const Categories = React.memo(function Categories({ categories, onClickCategory, activeCategory }) {
  
  return (
    <div className="page__category category">
      <div className="category__container _container">
        <nav className="category__nav">
          <ul className="category__items">
            {categories.map((item, index) => (
              <li
                onClick={() => onClickCategory(index)}
                key={item}
                className={cn({ active: activeCategory === index })}
              >
                {item}
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <img src={rose} alt="rose" />
    </div>
  );
})

Categories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClickCategory: PropTypes.func.isRequired,
  activeCategory: PropTypes.number.isRequired,
};
Categories.defaultProps = {
  categories: [],
  activeCategory: 0
}
export default Categories;
