/* eslint-disable no-multi-str */
import React, { useState } from "react";
import { useTypewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";


import MilasA from "../../Assets/Milas.gif";
import MilasB from "../../Assets/Milas2.png";
import "./HomePage.css";

const HomePage = () => {
  const [image, setImage] = useState(MilasA);

  const [button, setButton] = useState("invisible");

  setTimeout(() => {
    setImage(MilasB);
    setButton("pulse-button");
  }, 12100);

  const { text } = useTypewriter({
    words: [
      "Bonjour et bienvenu a vous. Je m'appelle Salim et je suis un jeune développeur \
      web & passionné de nouvelles technologies. J'ai suivi une formation intensive aupres de la wild code school\
     et je suis actuellement en stage dans lequelle je decouvre react native.",
    ],
    typeSpeed: 32,
  });

  return (
    <div className="HomePage">
      <img className="milas" src={image} alt="milas" />
      <span className="intro">{text}</span>
      <div>
        <Link to="/Portfolio">
          <button className={button}>Portfolio</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
