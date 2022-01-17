import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFlowers, setCategory, setSortBy } from "../redux/flowers";
import Categories from "./Categories";
import Flowers from "./Flowers";
import Sorting from "./Sorting";

const categories = [
    "Все",
    "Авторски букеты",
    "Корзины и коробки с цветами",
    "Монобукеты",
    "Зимняя коллекция",
  ];


const MainBlock = () => {
    const dispatch = useDispatch();
    const { flowers, activeCategory, activeSortBy} = useSelector(
      ({ flowers }) => flowers
    );
  
    useEffect(() => {
      dispatch(getFlowers(activeCategory, activeSortBy));
    }, [activeCategory, activeSortBy]);
  
    const setcategory = (category) => {
      dispatch(setCategory(category));
    };
  
    const setSorting = (sortBy) => {
      dispatch(setSortBy(sortBy));
    };
  
    return (
      <main className="page">
        <Categories
          categories={categories}
          onClickCategory={setcategory}
          activeCategory={activeCategory}
        />
        <Sorting activeSortBy={activeSortBy} setSorting={setSorting} />
        <Flowers flowers={flowers} />
      </main>
    );
  };

  export default MainBlock;