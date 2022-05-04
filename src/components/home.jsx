import React from "react";
import "./home.css";
import {Link} from 'react-router-dom';
import {useContext } from "react";
import store from "../context/storeContext";


const Home = () => {
  const user = useContext(store).user;

   return (
        <div className="home">

          <h6>Welcome Back {user.email}</h6>
            <h1>Welcome to Online Store</h1>

            <div>
              <Link className="btn btn-large btn-primary" to="/catalog">
                Check out the best NBA Jerseys Catalog
              </Link>
            </div>
        </div>
   );

   
}

export default Home;