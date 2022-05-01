import React from "react";
import "./home.css";
import {Link} from 'react-router-dom';


const Home = () => {

   return (
        <div className="home">
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