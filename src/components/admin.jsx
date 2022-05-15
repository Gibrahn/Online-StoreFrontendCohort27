import React from "react";
import "./admin.css";
import { useState, useEffect } from "react";
import DataService from './../services/dataService';

const Admin = () => {
    const [product, setProduct] = useState({});
    const [coupon, setCode] = useState({});
    const [errorVisible, setErrorVisible] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [allCoupons, setAllCoupons] = useState([]);
    const [allProducts, setAllProducts] = useState([]);

    const handleTextChange = (e) => {
        let copy = {...product};
        copy[e.target.name] = e.target.value;

        setProduct(copy);
    }

    useEffect(() => {
      retrieveCoupons();
      retrieveProducts();
    }, []);

    const retrieveProducts = async () => {
      let service = new DataService();
      let prods = await service.getCatalog();
      setAllProducts(prods)
    }

    const retrieveCoupons = async () => {
      let service = new DataService();
      let coupons = await service.getCoupons();

      setAllCoupons(coupons);
    };

    const handleCouponChange = (e) => {
      let copy = {...coupon};
      copy[e.target.name] = e.target.value;

      setCode(copy);
  }

  const showError = (text) => {
    setErrorMessage(text);
    setErrorVisible(true);
  }
    const handleSaveProduct = async () => {
        

        //title length
        if (product.title.length < 5){
          showError("Error: Title should have 5 characters")
          return;
        }

        if(!product.image){
          showError("Error: Image cna not be empty");
          return;
        }
        if(!product.category){
          showError("Error: Category can not be empty");
          return;
        }

        let savedProduct = {... product };
        savedProduct.price = parseFloat(product.price);

        if (!savedProduct.price || savedProduct.price <1) {
          showError("Error: Price should be greater then 1");
          return;
        }

        setErrorVisible(false);
        let service = new DataService();
        let res = await service.saveProduct(savedProduct);
        console.log("Saved", res);

        let copy = [...allProducts];
        copy.push(savedProduct);
        setAllProducts(copy);
      }


    const handleSaveCoupon = async () => {
      console.log(coupon);

      let savedCoupon = {...coupon };

      savedCoupon.discount = parseFloat(savedCoupon.discount);
      // Discount can not be greater than 35
      if(!savedCoupon.discount || savedCoupon.discount > 35){
          showError("Error: Discount can not be greater than 35%");
          return;
      }
      //code length can not be less than 5 
      if(savedCoupon.code.length < 5){
        showError("Error: Code is too short");
        return;
      }
      setErrorVisible(false);
      //send coupon to server
      let service = new DataService();
      let res = await service.saveCoupon(savedCoupon);
      console.log(res);

      let copy = [...allCoupons];
      copy.push(savedCoupon);
      setAllCoupons(copy);
  }

   return (
        <div className="admin-page">
          {errorVisible ? <div className="alert alert-danger">{errorMessage}</div> : null}

            <div className="sections-container">
                <sections className="sec-products">
                    <h4>Manage Products</h4>
                    <div className="form">
                        <div className="my-control">
                            <label>Title:</label>
                            <input onChange={handleTextChange} name="title" type="text" />
                        </div>
                        <div className="my-control">
                            <label>Image:</label>
                            <input onChange={handleTextChange} name="image" type="text" />
                        </div>
                        <div className="my-control">
                            <label>Category:</label>
                            <input onChange={handleTextChange} name="category" type="text" />
                        </div>
                        <div className="my-control">
                            <label>Price:</label>
                            <input onChange={handleTextChange} name="price" type="text" />
                        </div>
                        <div className="my-control">
                        <button onClick={handleSaveProduct}>Register Product</button>
                        </div>
                        <div className="product-list">
                      <ul>
                        {allProducts.map(product => <li key={product._id}>{product.title} - {product.image} -{product.category} - {product.price} </li>)}
                      </ul>
                    </div>
                    </div>

                </sections>
                <sections className="sec-coupons">
                    <h4>Manage Coupon Codes</h4>
                    <div className="form">
                        <div className="my-control">
                            <label>Coupon:</label>
                            <input onChange={handleCouponChange} name="code" type="text" />
                        </div>
                        <div className="my-control">
                            <label>Discount:</label>
                            <input onChange={handleCouponChange} name="discount" type="text" />
                        </div>
                        <div className="my-control">
                        <button onClick={handleSaveCoupon}>Register Coupon</button>
                        </div>
                    </div>
                    <div className="coupon-list">
                      <ul>
                        {allCoupons.map(coupon => <li key={coupon._id}>{coupon.code} - {coupon.discount}</li>)}
                      </ul>
                    </div>
                </sections>c
                
            </div>
            
        </div>
   );

   
}

export default Admin;