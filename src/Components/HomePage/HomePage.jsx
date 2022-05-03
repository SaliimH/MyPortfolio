import React from "react";
import Navbar from "../Navbar/NavBar";
import Pppicture from "../../Assets/1641297370605.jpg";
import { Carousel } from "3d-react-carousal";
import Skills from "../Skills/SkillsTable";
import Llinkd from "../../Assets/Logos/linkedin.png";
import Lgmail from "../../Assets/Logos/gmail.png";
import Lgit from "../../Assets/Logos/github.png";

import Cv from "../../pdf/Maquette.pdf"
import "./HomePage.css";

const HomePage = () => {
  let slides = [
    <img src="https://picsum.photos/800/500/?random" alt="1" />,
    <img src="https://picsum.photos/800/501/?random" alt="2" />,
    <img src="https://picsum.photos/800/502/?random" alt="3" />,
    <img src="https://picsum.photos/800/503/?random" alt="4" />,
    <img src="https://picsum.photos/800/503/?random" alt="4" />,
    <img src="https://picsum.photos/800/503/?random" alt="4" />,
    <img src="https://picsum.photos/800/503/?random" alt="4" />,
    <img src="https://picsum.photos/800/503/?random" alt="4" />,
    <img src="https://picsum.photos/800/504/?random" alt="5" />,
  ];

  return (
    <div className="ContainerHomepage">
      <div className="header">
        <Navbar />
        <p className="txt-wl">
          Welcome to Salim’s Portfolio scroll down to see The descrption
        </p>

        <svg className="arrows">
          <path className="a1" d="M0 0 L30 32 L60 0"></path>
          <path className="a2" d="M0 20 L30 52 L60 20"></path>
          <path className="a3" d="M0 40 L30 72 L60 40"></path>
        </svg>
      </div>
      <div className="cntr-bdy">
        <div className="cntr-atme">
          <div className="rectgl">
            <p>
              Je m'appelle Salim et je me suis énormément cherché.
              <br />
              Avoir un but fixe a été pour moi difficile, car très curieux de
              nature.
              <br />
              j'aime apprendre pleins de nouvelles choses que cela me soit utile
              ou non ; en parallèle, j'ai toujours été intéressé par le domaine
              informatique et je me suis enfin lancé dans une formation en tant
              que développeur web à la Wild code School.
              <br />
              Quoi de mieux que le métier de développeur web afin de découvrir
              énormément de domaine et surtout de ne jamais cesser d'apprendre,
              car ce monde est un monde en constante évolution.🚀
            </p>
          </div>
          <div className="conttain-ppp">
            <img className="ppp" src={Pppicture} alt="Salim's head" />
            <p className="p1">ABOUT ME</p>
          </div>
        </div>
        <p className="skll">SKILLS</p>
        <div className="rectgl">
          <Skills />
        </div>
      </div>
      <div className="carou">
        <p className="skll">PROJECTS</p>
        <p className="txtcrsl">
          *Un petit carouselle et leurs link code des projets realiser , les
          projets ne sont pas en ligne
        </p>
        <Carousel slides={slides} autoplay={true} interval={9000} />
      </div>
      <p className="skll pad">CONTACT ME</p>
      <div className="footer">

      <a href={Cv} download='CV-Salim-HEMMAR.pdf'>
                  <button id="testbutton">Salim's CV PDF</button>
                </a>
        <p>Vous pouvez me contacter via </p>
        <div className="test">
          <div className="cnt">

        <img  className='imgskill' src={Llinkd} alt='logo Linkedin' />
        <p> https://www.linkedin.com/in/salim-hemmar</p>
          </div>
          <div className="cnt">

        <img  className='imgskill' src={Lgmail} alt='logo Gmail' />
        <p> sh.hemmar@gmail.com</p>
          </div>
        </div>
        <p>Ou vous pouvez me suivre via Github</p>
        <div className="test">
        <img  className='imgskill' src={Lgit} alt='logo Github' />
       <p>https://github.com/SaliimH</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
