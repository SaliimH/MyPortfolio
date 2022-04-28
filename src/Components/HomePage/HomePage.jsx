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
  }, 13600);

  const { text } = useTypewriter({
    words: [
      "Bonjour et bienvenu a vous. Je m'appelle Paul ici vous découvrirez Salim qui est  un jeune développeur \
      web & passionné de nouvelles technologies. et qui a suivi tout comme moi une formation intensive aupres de la wild code school\
     il est actuellement en stage dans lequelle il decouvre react native.",
    ],
    typeSpeed: 32,
  });

  return (
    <div className="ContainerHomepage">
    <div className="HomePage">
      <img className="Paul" src={image} alt="milas" />
      <span className="intro">{text}</span>
      <div>
        <Link to="/Portfolio">
          <button className={button}>Portfolio</button>
        </Link>
      </div>
    </div>
    </div>
  );
};

export default HomePage;
