import React from "react";
import Pair from '@site/static/img/Pair.svg';
import Link from "@docusaurus/Link";

const Header = () => {

 return(
    <div className="header-container">
    <div className="header-row">
      <div className="header-content fade">
        <h1>Query On-Chain Data. <br/> Painfree.</h1>
        <p>Faster. Better. Cheaper</p>
        <div className="header-buttons">
          <Link
            className="header-button"
            to="/docs/intro"
          >
            Get Started
          </Link>
        </div>
      </div>

    </div>
  </div>
 )   
  
};

export default Header;
