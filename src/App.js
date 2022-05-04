import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navBar";
import Footer from "./components/footer";
import Catalog from "./components/catalog";
import About from "./components/about";
import Home from "./components/home";
import Admin from "./components/admin";
import Cart from "./components/cart";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Todo from "./components/todo";
import GlobalStoreProvider from "./context/globalStoreProvider";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStoreProvider>
        <BrowserRouter>
          <Navbar></Navbar>

          <Routes>
            <Route path="/catalog" element={<Catalog />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/shoppingList" element={<Todo />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/admin" element={<Admin />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
          </Routes>

          <Footer></Footer>
        </BrowserRouter>
      </GlobalStoreProvider>
    </div>
  );
}

export default App;
