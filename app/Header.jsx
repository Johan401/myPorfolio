'use client';
import React, { useState } from 'react'
import "../css/header.css"
import JohanPhoto from "../public/JohanPhoto.png"
import Image from 'next/image'
import JohanZamoraResume from '../public/resume/JohanZamoraResume.pdf';

const Header = () => {

  const [isActive, setIsActive] = useState("Home");

  const openPdfInNewWindow = () => {
    window.open(JohanZamoraResume, '_blank');
  };

  return (
    <section id='Home'>
      <nav className="navbar navbar-expand-lg ">
        <div className="container">
          <a className="navbar-brand fw-bold dark-color" href="#">
            Johan-Porfolio.
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 gap-3 mb-lg-0">
              <li className="nav-item">
                <a
                  onClick={()=> setIsActive("Home")}
                  className={isActive === "Home" ? "nav-link active fw-semibold" : "nav-link fw-medium"}
                  aria-current="page"
                  href="#Home"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a onClick={()=> setIsActive("Experience")} className={isActive === "Experience" ? "nav-link active fw-semibold" : "nav-link fw-medium"} href="#experience">
                  Experience
                </a>
              </li>
              <li className="nav-item">
                <a onClick={()=> setIsActive("Projects")} className={isActive === "Projects" ? "nav-link active fw-semibold" : "nav-link fw-medium"} href="#projects" passHref>
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a onClick={()=> setIsActive("About me")} className={isActive === "About me" ? "nav-link active fw-semibold" : "nav-link fw-medium"} href="#certifications">
                  Certifications
                </a>
              </li>
              <li className="nav-item">
                <a onClick={()=> setIsActive("Contact me")} className={isActive === "Contact me" ? "nav-link active fw-semibold" : "nav-link fw-medium"} href="#contact">
                  Contact me
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="headerContainer">
          
          <Image src={JohanPhoto} alt="" className="img-fluid" />
          
          <div className="myInformation">
            <h1>
              My Porfolio{" "} <br></br>
              <span>Software Dev / Front-end Dev</span>
            </h1>
            <p>
            I am a motivated and adaptable Software Developer with a strong commitment to personal and professional growth.
            </p>

            {/* <div className='tecnologiesList'>
              <Image src={ReactPhoto} alt='React'></Image>
              <Image src={JavaScriptPhoto} alt='JavaScript'></Image>
              <Image src={HTMLCSSPhoto} alt='HTML'></Image>
              <Image src={NextJsPhoto} alt='NextJS'></Image>
              <Image src={NETPhoto} alt='.NET'></Image>
              <Image src={MySQLPhoto} alt='SQL'></Image>
            </div> */}

            <div className="buttonContainer">
              <button onClick={() => window.open('https://www.linkedin.com/in/johan-zamora/', '_blank')} className="resumeButton" type="button">
                <span className="button__text">Linkedin</span>
                <span className="button__icon">
                <svg xmlns="http://www.w3.org/2000/svg" class="svg" viewBox="0 0 16 16"> <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/></svg>
                </span>
              </button>
                <button onClick={openPdfInNewWindow} className="resumeButton" type="button">
                  <span className="button__text">Resume</span>
                  <span className="button__icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35" id="bdd05811-e15d-428c-bb53-8661459f9307" data-name="Layer 2" class="svg"><path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path><path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path><path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path></svg></span>
                </button>
            </div>

          </div>

        </div>
    </section>
  )
}

export default Header