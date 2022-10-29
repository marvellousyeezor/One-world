import React from "react";
import Navbar from "./Navbar";
import "./Navbar.css";

function About() {
    return (
      <section class="respond">
        <div class="cover">
        <Navbar/>
        <h4 class="thirdh">About Us</h4>
        <p className='aboutme'>At One World we believe that there is more power in unity than in division.</p>
        <p className='aboutme'>One World Aims to make communication and connection easier, smoother and faster.</p>
        <p className='aboutme'>Connecting strangers, friends, and families with just a click of a button.</p>
        <p className='aboutme'>One World gets us all together.</p>
        <p className='aboutme'>"We are each other's harvest; we are each other's business; we are each other's magnitude and bond." - Gwendolyn Brooks</p>
        </div>
      </section>
    );
  }
  
  export default About;
  