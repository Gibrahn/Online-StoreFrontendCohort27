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

    const handleTextChange = (e) => {
        let copy = {...product};
        copy[e.target.name] = e.target.value;

        setProduct(copy);
    }

    useEffect(() => {
      retrieveCoupons();
    });

    const retrieveCoupons = async () => {
      let service = new DataService();
      let coupons = await service.getCoupons();

      setAllCoupons(coupons);
    };

    //const loadCoupons = async () => {
    //  const service = new DataService();
    //  let coupons = await service.getCoupons();
    //  console.log(coupons);
    //  setCoupon(coupons);
//  }

 // useEffect(() => {
      
      //loadCatalog();
  //}, []);

    const handleCouponChange = (e) => {
      let copy = {...coupon};
      copy[e.target.name] = e.target.value;

      setCode(copy);
  }

  const showError = (text) => {
    setErrorMessage(text);
    setErrorVisible(true);
  }
    const handleSaveProduct = () => {
        

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
        console.log(product);
      }


    const handleSaveCoupon = () => {
      console.log(coupon);

      let savedCoupon = {...coupon };

      savedCoupon.dicount = parseFloat(savedCoupon.discount);
      // Discount can not be greater than 35
      if(!savedCoupon.discount || savedCoupon.discount > 35){
          showError("Error: Discount can not be greater than 35%");
          return;
      }
      //code length can not be less than 5 
      if(savedCoupon.coupon.length < 5){
        showError("Error: Code is too short");
      }
      setErrorVisible(false);
      //send coupon to server
      console.log("Saving Coupon")

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
                    </div>

                </sections>
                <sections className="sec-coupons">
                    <h4>Manage Coupon Codes</h4>
                    <div className="form">
                        <div className="my-control">
                            <label>Coupon:</label>
                            <input onChange={handleCouponChange} name="coupon" type="text" />
                        </div>
                        <div className="my-control">
                            <label>Discount:</label>
                            <input onChange={handleCouponChange} name="disocunt" type="text" />
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
                </sections>
                
            </div>
            
        </div>
   );

   
}

export default Admin;