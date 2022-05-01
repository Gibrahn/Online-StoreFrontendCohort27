import "./product.css";
import QuantityPicker from "./quantityPicker";
import { useState } from "react";

const Product = (props) => {
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (val) => {
        console.log("The quantity changed!", val);
        setQuantity(val);
    };

    return (
    <div className="product">
        <img src={"/images/" + props.info.image}></img>
        
        <h5>{props.info.title}</h5>

        <label className="Price:">$ {(props.info.price).toFixed(2)}</label>
        <label className="Total:">$ {(props.info.price * quantity).toFixed(2)}</label>

        <QuantityPicker onChange={handleQuantityChange}></QuantityPicker>

        <button className="btn btn-sm btn-info">Add to cart</button>
    </div>      
    );
}

export default Product;