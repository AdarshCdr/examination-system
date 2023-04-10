import React from 'react'
import '../CSS/About.css'

import adarsh from "../Images/adarsh.jpg"

function About() {
  return (
    <div class="about-page">
    <div class="about-section">
  <h1>About Us </h1>
  <p>I am currently an undergraduate student of GCE Keonjhar working 
    on this Project on the  Online Examination System .</p>
  <p>Resize the browser window to see that this page is responsive by the way.</p>
</div>

<h2 >Our Team</h2>
<div class="row">
<div class="column">
    <div class="about-card">
      <img src={adarsh} alt="John" />
      <div class="card-container">
        <h2>Adarsh Mishra</h2>
        <p class="abouttitle">MERN Developer</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>adarshmishraofficialacc@gmail.com</p>
        <p><button class="about-button">Contact</button></p>
      </div>
    </div>
  </div>

  
  
</div>
    
    </div>
  )
}

export default About