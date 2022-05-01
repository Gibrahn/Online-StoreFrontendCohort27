import React from "react";
import "./admin.css";
import { useState } from "react";

const Admin = () => {
    const [product, setProduct] = useState({});
    const [coupon, setCode] = useState({});

    const handleTextChange = (e) => {
        let copy = {...product};
        copy[e.target.name] = e.target.value;

        setProduct(copy);
    }

    const handleCouponChange = (e) => {
      let copy = {...coupon};
      copy[e.target.name] = e.target.value;

      setCode(copy);
  }


    const handleSaveProduct = () => {
        

        //title length
        if (product.title.length < 5){
          alert("Error: Title length is too short");
          return;
        }

        if(!product.image){
          alert("Error: Image cna not be empty");
          return;
        }
        if(!product.category){
          alert("Error: Category can not be empty");
          return;
        }

        let savedProduct = {... product };
        savedProduct.price = parseFloat(product.price);

        if (!savedProduct.price || savedProduct.price <1) {
          alert("Error: Price should be greater then 1");
          return;
        }

        console.log(product);
      }


    const handleSaveCoupon = () => {
      console.log(coupon);

      let savedCoupon = {...coupon };

      savedCoupon.dicount = parseFloat(savedCoupon.discount);
      // Discount can not be greater than 35
      if(!savedCoupon.discount || savedCoupon.discount > 35){
          alert("Error: Discount can not be greater than 35%");
          return;
      }
      //code length can not be less than 5 
      if(savedCoupon.coupon.length > 5){
        alert("Error: Code is too short");
      }
      //send coupon to server
      console.log("Saving Coupon")

  }

   return (
        <div className="admin-page">
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
                </sections>
                
            </div>
            
        </div>
   );

   
}

export default Admin;