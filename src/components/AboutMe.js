import React from "react";
import '../styles/Aboutme.css'

function AboutMe() {
  return (
    <section className="aboutme">
        <nav id="aboutme"><h2>WHO AM I?</h2></nav>
        <ol>
          <li>Hey Everyone! My name is Jeongho Lee</li>
          <li>I am excited to learn as much as I can through this UCB</li>
          <li>I would like to apply the tools I learn in HTML, CSS and JavaScript to attain a position Front End Developer.</li>
          <li>I like the idea of working with the visual side of browsers, and developing tools with how the user interacts with website.</li>
        </ol>  
        <img src={require("../styles/images/Lee.jpg")} className="profile" alt="profile photo"></img>
    </section>  
);
}

export default AboutMe;