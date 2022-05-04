import React from "react";
import { Carousel } from "3d-react-carousal";
import ScrollAnimation from "react-animate-on-scroll";

import Navbar from "../Navbar/NavBar";
import Pppicture from "../../Assets/1641297370605.jpg";
import Skills from "../Skills/SkillsTable";
import Llinkd from "../../Assets/Logos/linkedin.png";
import Lgmail from "../../Assets/Logos/gmail.png";
import Lgit from "../../Assets/Logos/github.png";

import Snapeat from "../../GiphProject/Snapeat.gif";
import Btobeach from "../../GiphProject/BtoBeach.gif";
import ManyToMany from "../../GiphProject/ManyToMany.gif";
import Cv from "../../pdf/CV-HEMMAR-SALIM.pdf";
import "./HomePage.css";
import "./Animation.css";

const HomePage = () => {
  let slides = [
    <a href="https://github.com/SaliimH/smoothy-P2/tree/dev">
      <img className="giphProject" src={Snapeat} alt="Giph Snapeat website" />
    </a>,
    <a href="https://github.com/SaliimH/Bto-Beach-">
      <img className="giphProject" src={Btobeach} alt="Giph Btobeach website" />
    </a>,
    <a href="https://github.com/SaliimH/ManyToMany.git">
      <img
        className="giphProject"
        src={ManyToMany}
        alt="Giph Many To Many website"
      />
    </a>,
  ];

  return (
    <div className="ContainerHomepage">
      <div  className="header">
        <Navbar />
        <p id="Homme" className="txt-wl">
          Bienvenu dans le portfolio de Salim. <br/>
          N’hésitez pas à scroller pour en voir plus ✌️
        </p>
<a href="#About">


        <svg className="arrows">
          <path className="a1" d="M0 0 L30 32 L60 0"></path>
          <path className="a2" d="M0 20 L30 52 L60 20"></path>
          <path className="a3" d="M0 40 L30 72 L60 40"></path>
        </svg>
        </a>
      </div>
      <div id="About" className="cntr-bdy">
        <ScrollAnimation
          animateIn="bounceInRight"
          animateOut="fadeOut"
          duration={1.2}
        >
          <div className="cntr-atme">
            <div className="rectgl">
              <p>
                Je m'appelle Salim et je me suis énormément cherché.
                <br />
                Avoir un but fixe a été pour moi difficile, car très curieux de
                nature.
                <br />
                j'aime apprendre pleins de nouvelles choses que cela me soit
                utile ou non ; en parallèle, j'ai toujours été intéressé par le
                domaine informatique et je me suis enfin lancé dans une
                formation en tant que développeur web à la Wild code School.
                <br />
                Quoi de mieux que le métier de développeur web afin de découvrir
                énormément de domaine et surtout de ne jamais cesser
                d'apprendre, car ce monde est un monde en constante évolution.🚀
              </p>
            </div>
            <div className="conttain-ppp">
              <img className="ppp" src={Pppicture} alt="Salim's head" />
              <ScrollAnimation duration={5} animateIn="fadeIn">
                <p className="p1">ABOUT ME</p>
              </ScrollAnimation>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation
          animateIn="bounceInLeft"
          animateOut="fadeOut"
          duration={1.2}
        >
          <ScrollAnimation  duration={5} animateIn="fadeIn">
            <p  id="Skill" className="skll">SKILLS</p>
          </ScrollAnimation>

          <div className="rectgl">
            <Skills />
          </div>
        </ScrollAnimation>
      </div>
      <ScrollAnimation duration={5} animateIn="fadeIn">
      <div className="carou">
        <p id="Projects" className="skll">PROJECTS</p>
        <p className="txtcrsl">
          *Un petit carrousel et le lien Github des projets réaliser, ils ne sont pas en ligne
        </p>
        <Carousel slides={slides} autoplay={true} interval={24000} />
      </div>
      </ScrollAnimation>
      <ScrollAnimation duration={5}  animateIn="fadeIn">
        <p id="Contact" className="skll pad">CONTACT ME</p>
      </ScrollAnimation>
      <div className="footer">
        <a href={Cv} download="CV-Salim-HEMMAR.pdf">
          <button id="testbutton">Mon CV PDF</button>
        </a>
        <p className="txt-ftr">Vous pouvez me contacter via </p>
        <div className="cntn-end">
          <div className="cntn-end2">
            <div className="cnt">
              <a
                href="https://www.linkedin.com/in/salim-hemmar"
                target="_blank"
                rel="noreferrer"
              >
                <img className="imgskill" src={Llinkd} alt="logo Linkedin" />
              </a>
              <p> https://www.linkedin.com/in/salim-hemmar</p>
            </div>
            <div className="cnt">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=sh.hemmar@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <img className="imgskill" src={Lgmail} alt="logo Gmail" />
              </a>
              <p> sh.hemmar@gmail.com</p>
            </div>
          </div>
        </div>
        <p className="txt-ftr">Ou vous pouvez me suivre via Github</p>
        <div className="cntn-end cnt">
          <a href="https://github.com/SaliimH" target="_blank" rel="noreferrer">
            <img className="imgskill" src={Lgit} alt="logo Github" />
          </a>
          <p>https://github.com/SaliimH</p>
        </div>
        <div className="cnt-pend">
          <p className="pend">
            Remerciement a
            <a
              className="rainbowText"
              target="_blank"
              href="https://icons8.com"
              rel="noreferrer"
            >
              Icons8
            </a>
            pour les logos et icons present 🔥
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
