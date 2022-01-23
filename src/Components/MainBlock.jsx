import React, { useCallback, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFlowers, setActivePage, setCategory, setSortBy } from "../redux/flowers";
import Categories from "./Categories";
import Flowers from "./Flowers/Flowers";
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
  const { flowers, activeCategory, activeSortBy, activePage } = useSelector(
    ({ flowers }) => flowers
  );

  useEffect(() => {
    dispatch(getFlowers(activeCategory, activeSortBy));
  }, [activeCategory, activeSortBy]);

  const setcategory = useCallback((category) => {
    
    dispatch(setCategory(category));
  }, []);

  const setSorting = useCallback((sortBy) => {
    dispatch(setSortBy(sortBy));
  }, []);

  const handleOnPageClick = useCallback((page) => {
    dispatch(setActivePage(page));
  }, []);

  return (
    <main className="page">
      <Categories
        categories={categories}
        onClickCategory={setcategory}
        activeCategory={activeCategory}
      />
      <Sorting activeSortBy={activeSortBy} setSorting={setSorting} />
      <Flowers
        flowers={flowers}
        activePage={activePage}
        onPageClick={handleOnPageClick}
      />
    </main>
  );
};

export default MainBlock;
