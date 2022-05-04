import React from "react";



const Skills = () => {
  const SkillsTabl = [
    {
      Name: "HTML5",
      Image: require("../../Assets/Logos/html5.png"),
      Link: "https://fr.wikipedia.org/wiki/Hypertext_Markup_Language",
    },
    {
      Name: "CSS",
      Image: require("../../Assets/Logos/css3.png"),
      Link: "https://fr.wikipedia.org/wiki/CSS",
    },
    {
      Name: "TAILWINDCSS",
      Image: require("../../Assets/Logos/tailwindcss.png"),
      Link: "https://tailwindcss.com/",
    },
    {
      Name: "BOOTSTRAP",
      Image: require("../../Assets/Logos/bootstrap.png"),
      Link: "https://getbootstrap.com/",
    },
    {
      Name: "JAVASCRIPT",
      Image: require("../../Assets/Logos/js.png"),
      Link: "https://www.javascript.com/",
    },
    {
      Name: "TS",
      Image: require("../../Assets/Logos/ts.png"),
      Link: "https://www.typescriptlang.org/",
    },
    {
      Name: "REACT",
      Image: require("../../Assets/Logos/react.png"),
      Link: "https://fr.reactjs.org/",
    },
    {
      Name: "LIT",
      Image: require("../../Assets/Logos/lit.png"),
      Link: "https://lit.dev/",
    },
    {
      Name: "NODEJS",
      Image: require("../../Assets/Logos/nodejs.png"),
      Link: "https://nodejs.org/",
    },
    {
      Name: "MYSQL",
      Image: require("../../Assets/Logos/mysql.png"),
      Link: "https://www.mysql.com/",
    },
    {
      Name: "POSTMAN",
      Image: require("../../Assets/Logos/postman.png"),
      Link: "https://www.postman.com/",
    },
    {
      Name: "LINUX",
      Image: require("../../Assets/Logos/linux.png"),
      Link: "https://fr.wikipedia.org/wiki/Linux",
    },
    {
      Name: "GIT",
      Image: require("../../Assets/Logos/git.png"),
      Link: "https://git-scm.com/",
    },
    {
      Name: "FIGMA",
      Image: require("../../Assets/Logos/figma.png"),
      Link: "https://www.figma.com/",
    },
  ];  
  return (
    <>
<p>
  Les langages et framworks de programmation que je connais et ai
  utilisés dans mes projets.
</p>
<div className="cntnr-skills">
{SkillsTabl.map(({Name, Image, Link}, index) => (
  
  <a key={index} href={Link} target="_blank" rel="noreferrer">
        <img key={index} className='imgskill' src={Image} alt={Name} />
      </a>
      ))}
</div>
      </>
     )
  
};

export default Skills;
