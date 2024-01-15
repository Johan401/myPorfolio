'use client';
import React from 'react'
import "../css/projects.css"
import ReactPhoto from "../public/React.png"
import JavaScriptPhoto from "../public/JavaScript.png"
import HTMLCSSPhoto from "../public/HTML-CSS.png"
import NET from "../public/NET.png"
import Image from 'next/image'

const ProjectCards = ( {project} ) => {
  return (
    <div className='projectCard'>
        <img className='projectImgs' src={project.imgProject} />
        <div className='cardInfo'>
          <h5>{project.name}</h5>
          <p>{project.description}</p>
          <div className='tecnologiesList'>
            <Image src={ReactPhoto} alt='React'></Image>
            <Image src={JavaScriptPhoto} alt='JavaScript'></Image>
            <Image src={HTMLCSSPhoto} alt='HTML'></Image>
            <Image src={NET} alt='NextJS'></Image>
          </div>
          <button onClick={() => project.url !== "" ? window.open(project.url, '_blank') : alert("Private Repository")} style={{ margin: 0 }} className='sendButton'>
              Show
              <div class="arrow-wrapper">
                  <div class="arrow"></div>

              </div>
          </button>
        </div>
    </div>
  )
}

export default ProjectCards