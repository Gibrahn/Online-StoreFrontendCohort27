import "./catalog.css";
import Product from "./product";
import { useState,useEffect } from "react";
import DataService from "../services/dataService";
import { Button } from "bootstrap";

const Catalog = () => {
    const [products, setProducts] = useState([]);

    const loadCatalog = () => {
        const service = new DataService();
        let prods = service.getCatalog();
        console.log(prods);
        setProducts(prods);
    }

    useEffect(() => {
        // do something when the components is displayed
        loadCatalog();
    }, []);


    return (
    <div className="catalog">
        <h1>Catalog</h1>
        <h4>We have {products.length} NBA jerseys available</h4>

        {products.map((prod) => (
            <Product key= {prod._id} info={prod}></Product>
        ))}
    </div>
    );
}

export default Catalog;