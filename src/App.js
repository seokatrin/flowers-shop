import { Route, Routes } from "react-router-dom";
import FlowerDetails from "./Components/FlowerDetails";
import Header from "./Components/Header";
import MainBlock from "./Components/MainBlock";
import ShopCart from "./Components/ShopCart";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<MainBlock />} />
        <Route path=":id" element={<FlowerDetails />} />
        <Route path="/shopcart" element={<ShopCart />} />
      </Routes>
    </div>
  );
}

export default App;
