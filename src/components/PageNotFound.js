import React from "react";
import Navbar from "./Navbar";
import "./Navbar.css";
import error from "../assets/error.png"

function PageNotFound() {
    return (
      <section class="respond">
        <div class="cover">
        <Navbar/>
        <div class= 'notfound'><img src={error} alt='Error'></img></div>
        <h2 class= 'header'>Error 404</h2>
        <h2 class= 'subheader'>Page Not Found</h2>
        <p class= 'content'>The page you are looking for doesn't exist or has been removed.</p>
        </div>
      </section>
    );
  }
  
  export default PageNotFound;
  