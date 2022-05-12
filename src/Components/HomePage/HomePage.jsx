import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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

const HomePage = () => {
  AOS.init();

  return (
    <div className="ContainerHomepage">
      <div className="header">
        <Navbar />
        <p id="Homme" className="txt-wl">
          Bienvenu dans le portfolio de Salim. <br />
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
        <div data-aos="fade-up" className="cntr-atme">
          <div className="rectgl">
            <p>
            Je m'appelle Salim et je suis un jeune développeur web de 27 ans.
              <br />
              Très motivé d'apprendre, je suis de natures très, curieux. <br />
              J'ai été passionné par ce domaine dès mon enfance,(merci site du zero ) car en plus d'être vaste en apprentissage, il nous permet de découvrir de nombreux domaines et métiers. <br />Avec moi, vous ne serez pas déçu, je sais m'adapter et travailler en équipe et toujours dans la bonne humeur, je sais aussi être autonome et j'ai le sens des responsabilités.<br />
              Je suis à la <span className="rainbowAlt">recherche d'une alternance pour septembre 2022</span> et actuellement je suis en stage ReactNative.<br /> Je me familiarise avec PHP pendant mon temps libre. Si vous avez besoin d'aide dans le cadre d'un projet, je me ferai un plaisir de vous aider. <br /> Et si vous souhaitez me recruter, vous pouvez télécharger mon CV PDF en bas de page. 😎
            </p>
          </div>
          <div className="conttain-ppp">
            <img className="ppp" src={Pppicture} alt="Salim's head" />

            <p className="p1">ABOUT ME</p>
          </div>
        </div>

        <p data-aos="zoom-out-down" id="Skill" className="skll">
          SKILLS
        </p>

        <div data-aos="zoom-out-down" className="rectgl">
          <Skills />
        </div>
      </div>

      <div className="carou">
        <p id="Projects" className="skll">
          PROJECTS
        </p>
        <p className="txtcrsl">
          *Un petit carrousel et le lien Github des projets réaliser, ils ne
          sont pas en ligne
        </p>
      </div>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={24000}
        centerMode={false}
        className=""
        containerClass="container"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 1,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 1,
          },
        }}
        showDots
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        <a href="https://github.com/SaliimH/smoothy-P2/tree/dev">
          <img
            className="giphProject"
            src={Snapeat}
            alt="Giph Snapeat website"
            style={{
              display: "block",
              height: "90%",
              margin: "auto",
              width: "50%",
            }}
          />
        </a>
        <a href="https://github.com/SaliimH/Bto-Beach-">
          <img
            className="giphProject"
            src={Btobeach}
            alt="Giph Btobeach website"
            style={{
              display: "block",
              height: "90%",
              margin: "auto",
              width: "50%",
            }}
          />
        </a>
        <a href="https://github.com/SaliimH/ManyToMany.git">
          <img
            className="giphProject"
            src={ManyToMany}
            alt="Giph Many To Many website"
            style={{
              display: "block",
              height: "90%",
              margin: "auto",
              width: "50%",
            }}
          />
        </a>
      </Carousel>

      <p id="Contact" className="skll pad">
        CONTACT ME
      </p>

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
