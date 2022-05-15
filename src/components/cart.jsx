import { useContext } from "react";
import store from "../context/storeContext";
import ProductInCart from "./productInCart";



const getTotal = () => {
  let total = 0;
  for (let i = 0; i < Cart.length; i++) {
    let prod = Cart[i]
    total += prod.quantity * prod.price
  }
  
  return "$ " + total.toFixed(2)
}
const Cart =() => {
  const cart = useContext(store).cart;
  return (
    <div>
      <h1>Your cart</h1>
      <h5>Currently you have {cart.length} products in the cart</h5>

      <div>
        <div className="products">
            { cart.map((prod) => (
            <ProductInCart  key={prod._id} info={prod}></ProductInCart>
            ))}
        </div>
        <div className="side-panel">
          <h6>Are you ready to pay?</h6>
          <h5>{getTotal()}</h5>
          <hr />
          <button className="btn btn-block btn-primary">Proceed to Payment</button>

        </div>
      </div>
    </div>
  );
};

export default Cart;