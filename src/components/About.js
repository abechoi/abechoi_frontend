import React from "react";

const About = () => {
  return (
    <section className="about-section">
      <div className="bio-div">
        <img className="bio-pic" 
        src="https://avatars1.githubusercontent.com/u/7634806?s=460&u=6f6f5b9b3070017d34185e9cdf32489498f15d17&v=4" 
        alt="https://avatars1.githubusercontent.com/u/7634806?s=460&u=6f6f5b9b3070017d34185e9cdf32489498f15d17&v=4"/>
        <div className="bio-info">
          <p>Abraham Jong-Hae Choi</p>
          <p>Male | 33</p>
          <p>Chapman University</p>
          <p>Computer Science B.S</p>
          <p>Web Developer</p>
          <p>US Veteran</p>
        </div>
      </div>
      <div className="about-div">
        <div className="about-card">
          <h1>Introduction</h1>
          <p>Hello, World! My name is Abraham Choi and my Korean name is Choi Jong-Hae. 
          I was born in New York and grew up in New Jersey. I joined the United States Air Force 
          and was stationed in Louisiana. After being honorably discharged, went back to New 
          Jersey to attend Middlesex County College, where I had received my Associate's degree 
          in Computer Science, then moved to Orange, California where I received my Bachelor's 
          degree in Computer Science from Chapman University. Currently, I live and work in 
          Irvine, at a Managed Service Provider where I perform network operations, maintain 
          servers, and provide helpdesk support.</p>
          <p>Since 2019, I have been learning the MERN stack (MongoDB, Express, React, Node). 
          I watch a lot of tutorials on Youtube; some of my favorite channels are The Net Ninja
          , Traversy Media, and Free Code Camp. I am also slowly reading Learning React by Alex 
          Banks and Eve Porcello. I think this is a solid book and I recommend it for anyone 
          who wants to get into React developing.</p>
        </div>
        <div className="about-card">
          <h1>Current Projects</h1>
          <p>As of right now, this website has been made completely with Create-React-App for 
          the sake of getting it up and running. Once I add media queries for responsiveness, I 
          want to start adding MongoDB, Express, Node elements. I'll also have to consider a 
          rich text framework to prettify my blogs. Once I do that, this would become my first 
          completed original MERN project!</p>
          <p>Outside of this website, I want to start on my passion projects, but that will 
          require more learning and time. As long as I continue the steady pace as I have 
          been since 2019, I know I will get there.</p>
        
        </div>
      </div>
    </section>
  );  
}

export default About;