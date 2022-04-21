import React from "react";

import Milas from '../../Assets/Milas.gif';
import "./HomePage.css";

const HomePage = () => {
  return(

    <div>
        <img className="milas" src={Milas} alt="signmove" />
    <p>
      coucou c'est moi !!!
      </p>
      </div>
    );
};

export default HomePage;
