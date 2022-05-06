import "./productInCart.css";
import Product from "./product";

const ProductInCart = (props) => {

  const getTotal = () =>{
    return "$ " + (props.info.quantity * props.info.price).toFixed(2);
  }

  return (
  <div className="prod-cart">
    <img src={"/images/" + props.info.image} alt="Product" />

    <h6>{props.info.title}</h6>

    <label>{props.info.price.toFixed(2)}</label>
    <label>{props.info.quantity}</label>
    <label>{getTotal()}</label>

    <button className="btn btn-sm btn-danger">Del</button>
  </div>
  );
};

export default ProductInCart;