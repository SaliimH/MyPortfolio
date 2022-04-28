import React from "react";
import Navbar from "../Navbar/NavBar";
import Aboutme from "../../Assets/Sans_titre-removebg-preview.png";
import "./PortFolio.css";

const PortFolio = () => {
  return (
    <div className="disp1">
      <div className="disp">
        <div className="como">
          <Navbar />
        </div>
        <div className="containerbox">
          <div className="containertitl">
            <h1 className="Title-style">About Me</h1>
          </div>
          <div className="content-card">
          <img className="Paul" src={Aboutme} alt="aboutme" />
          <div className="card">
            <p id="About">
              Comme decrit par Paul precedement je m'appelle Salim et je me suis
              énormément cherché. <br />
              Avoir un but fixe a été pour moi difficile, car très curieux de
              nature 🧐, j'aime apprendre pleins de nouvelles choses que cela me
              soit utile ou non ; par exemple je me suis recement decouvert une
              passion pour le Pixel Art. <br /> En parallèl J'ai toujours été
              intéressé par le domaine informatique et je me suis enfin lancé
              dans une formation en tant que développeur web à la Wild code
              School. <br /> Quoi de mieux que le métier de développeur web afin
              de découvrir énormément de domaine et surtout de ne jamais cesser
              d'apprendre, car ce monde est un monde en constante évolution.🚀
            </p>
          </div>
          </div>
          <div className="card">
            <h2 className="Title-style">Skill</h2>
            <p id="Skill">
              Comme decrit par Paul precedement je m'appelle Salim et je me suis
              énormément cherché. <br />
              Avoir un but fixe a été pour moi difficile, car très curieux de
              nature 🧐, j'aime apprendre pleins de nouvelles choses que cela me
              soit utile ou non ; par exemple je me suis recement decouvert une
              passion pour le Pixel Art. <br /> En parallèl J'ai toujours été
              intéressé par le domaine informatique et je me suis enfin lancé
              dans une formation en tant que développeur web à la Wild code
              School. <br /> Quoi de mieux que le métier de développeur web afin
              de découvrir énormément de domaine et surtout de ne jamais cesser
              d'apprendre, car ce monde est un monde en constante évolution.🚀
            </p>
          </div>

          <div className="card">
            <h3 className="Title-style">Projects</h3>
            <p id="Projects">
              Comme decrit par Paul precedement je m'appelle Salim et je me suis
              énormément cherché. <br />
              Avoir un but fixe a été pour moi difficile, car très curieux de
              nature 🧐, j'aime apprendre pleins de nouvelles choses que cela me
              soit utile ou non ; par exemple je me suis recement decouvert une
              passion pour le Pixel Art. <br /> En parallèl J'ai toujours été
              intéressé par le domaine informatique et je me suis enfin lancé
              dans une formation en tant que développeur web à la Wild code
              School. <br /> Quoi de mieux que le métier de développeur web afin
              de découvrir énormément de domaine et surtout de ne jamais cesser
              d'apprendre, car ce monde est un monde en constante évolution.🚀
            </p>
          </div>

          <div className="card">
            <h4 className="Title-style">Contact</h4>
            <p id="Contact">
              Comme decrit par Paul precedement je m'appelle Salim et je me suis
              énormément cherché. <br />
              Avoir un but fixe a été pour moi difficile, car très curieux de
              nature 🧐, j'aime apprendre pleins de nouvelles choses que cela me
              soit utile ou non ; par exemple je me suis recement decouvert une
              passion pour le Pixel Art. <br /> En parallèl J'ai toujours été
              intéressé par le domaine informatique et je me suis enfin lancé
              dans une formation en tant que développeur web à la Wild code
              School. <br /> Quoi de mieux que le métier de développeur web afin
              de découvrir énormément de domaine et surtout de ne jamais cesser
              d'apprendre, car ce monde est un monde en constante évolution.🚀
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortFolio;
