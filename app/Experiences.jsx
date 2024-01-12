import React from 'react'
import "../css/experiences.css"
import { MdOutlineWorkOutline } from "react-icons/md";

const Experiences = () => {
  return (
    <div className='experienceContainer'>
        <h1>Experiences <MdOutlineWorkOutline /></h1>
          <ul className='workcontainer'>
            <li>
              <h4>Software Developer (Symbiotic)</h4>
              <p>June 2022 - Present</p>
              <ul className='functions'>
                <li>Develop and maintain different web pages with React JS</li>
                <li>Create and maintain APIs with C# (.Net)</li>
                <li>Interact with a team of Backend developers and UI/UX designers</li>
                <li>Communicate effectively with customers (Promérica, BCR, Evertec)</li>
                <li>Working with AWS for website hosting</li>
                <li>Work with tools such as Postman, Jira, Visual Studio, SourseTree, etc.hosting</li>
              </ul>
            </li>
            <li>
              <h4>Software Developer (Tecnologico de Costa Rica)</h4>
              <p>June 2021 - April 2022</p>
              <ul className='functions'>
                <li>Develop and maintain different web pages with React JS</li>
                <li>Create and maintain APIs with C# (.Net)</li>
                <li>Interact with a team of Backend developers and UI/UX designers</li>
                <li>Communicate effectively with customers (Promérica, BCR, Evertec)</li>
                <li>Working with AWS for website hosting</li>
                <li>Work with tools such as Postman, Jira, Visual Studio, SourseTree, etc.hosting</li>
              </ul>
            </li>
          </ul>
    </div>
  )
}

export default Experiences