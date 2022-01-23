import { Route, Routes } from "react-router-dom";
import FlowerDetails from "./Components/Flowers/FlowerDetails";
import Footer from "./Components/Footer";
import Header from "./Components/Header/Header";
import MainBlock from "./Components/MainBlock";
import ShopCart from "./Components/ShoppingCart/ShopCart";
import ContactForm from "./Form/ContactForm";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<MainBlock />} />
        <Route path=":id" element={<FlowerDetails />} />
        <Route path="/shopcart" element={<ShopCart />} />
        <Route path="/form" element={<ContactForm />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
