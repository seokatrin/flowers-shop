import FlowerItem from "./FlowerItem";
import "../../styles/main.scss";
import PropTypes from "prop-types";
import Paginator from "../../Pagination/Paginator";

function Flowers({ flowers, activePage, onPageClick }) {
  const pageLimit = 9;
  const shownFlowers = flowers.filter(
    (item, index) =>
      activePage * pageLimit <= index && index < (activePage + 1) * pageLimit
  );
  return (
    <div className="page__flowers flowers">
      <div className="flowers__container _container">
      {flowers.length > pageLimit && (
          <Paginator
            activePage={activePage}
            itemsCount={flowers.length}
            onPageClick={onPageClick}
            pageLimit={pageLimit}
          />
        )}
        <div className="flowers__body">
          {shownFlowers.map((item) => {
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
  flowers: PropTypes.array,
  activePage: PropTypes.number,
  onPageClick: PropTypes.func
};
Flowers.defaultProps = {
  flowers: [],
  activePage: 0,
};

export default Flowers;
