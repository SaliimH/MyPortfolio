/* eslint-disable no-multi-str */
import React, { useState } from "react";
import { useTypewriter } from "react-simple-typewriter";

import MilasA from "../../Assets/Milas.gif";
import MilasB from "../../Assets/Milas2.png";
import "./HomePage.css";

const HomePage = () => {
  const [image, setImage] = useState(MilasA);

  setTimeout(() => {
    setImage(MilasB);
  }, 17000);

  const { text } = useTypewriter({
    words: [
      "Bonjour et bienvenu dans mon portfolio Je m'appelle Salim et je suis un jeune développeur \
      web & passionné de nouvelles technologies. J'ai suivi une formation de 5 mois aupres de la wild code school\
     et je suis actuellement en stage dans le quelle je decouvre react native.",
    ],
    typeSpeed: 50,
  });

  return (
    <div className="HomePage">
      <img className="milas" src={image} alt="milas" />
      <span className="intro">{text}</span>
    </div>
  );
};

export default HomePage;
