import "./App.css";
import CheckoutPage from "./components/CheckoutPage";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />}/>
        <Route path="/checkout-page" element={<CheckoutPage />}/>
      </Routes>
    </div>
  );
}

export default App;
