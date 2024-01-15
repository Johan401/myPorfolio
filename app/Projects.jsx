import React from 'react'
import "../css/projects.css"
import ProjectCards from './ProjectCards'
import { FaRegStar } from "react-icons/fa";

const Projects = () => {

  const arrayProjects = [
    {name: "Web Site (Automata)", imgProject: "/OneAutomata.png", description: "This project consists of a landing page for the company OneAutomata, for this project I used HTML, CSS and React for the components, styles and architecture of the page, also I used a free email service called EmailJS so that the suggestions of the visitors arrive to an email of the company.", url: "https://oneautomata.com/"},
    {name: "Uber Eats Clone", imgProject: "/UberEatsClone.png", description: "This project consists of an application that allows the management and purchase of products in any food court of any evil, it was done with a great work team, this project is divided into a backend part where all the APIs were created which are consumed in the front end in React Js in addition to using Firebase.", tech: ["Python 3", "HTML", "CSS", "MySQL"], img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/800px-Python-logo-notext.svg.png", result: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum saepe architecto nulla cumque minus esse fugiat mollitia tempore laudantium dolor, suscipit ab incidunt quod sapiente sunt pariatur ex expedita reprehenderit?", url: ""},
    {name: "WhatsApp Clone", imgProject: "/Chatapp.webp", description: "This project allows the connection between 1 or more connected devices where they can interact with each other, for this project I used React and Sockets Js for the messages and real time connection between devices.", url: "https://github.com/Johan401/Chapp"},
    {name: "Emotion Detection", imgProject: "/EmotionDetection.jpeg", description: "Articifial intelligence is booming nowadays, I was able to participate in a project with facial and object recognition, besides training the models for a better performance, for this project I used Yolo, Python, other libraries for people recognition."},
    {name: "CMS (Symbiotic)", imgProject: "/CMS.png", description: "In this project I worked with the massive management of APIs (CRUD), basically it is a page in React where many APIs are consumed to perform many functions with the server and backend, in addition to making some APIs or requests to the server, configure environment variables and configuration in Google Cloud.", tech: ["Python 3", "HTML", "CSS", "MySQL"], img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/800px-Python-logo-notext.svg.png", result: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum saepe architecto nulla cumque minus esse fugiat mollitia tempore laudantium dolor, suscipit ab incidunt quod sapiente sunt pariatur ex expedita reprehenderit?", url: ""},
    {name: "Web Api Polution", imgProject: "/ACMTEC.jpg", description: "This project I worked with a great team, I had the role of connecting the OpenWeatherMap API to know the state of air pollution in different parts of the world, where we worked on a search engine where the user can decide the location and the application will show the air pollution indices at that point.", tech: ["Python 3", "HTML", "CSS", "MySQL"], img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/800px-Python-logo-notext.svg.png", result: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum saepe architecto nulla cumque minus esse fugiat mollitia tempore laudantium dolor, suscipit ab incidunt quod sapiente sunt pariatur ex expedita reprehenderit?", url: "https://github.com/Johan401/ACMTEC"}
  ]

  return (
    <>
    
      <div className='projectContainer'>
        <h1 id='projects'>Projects <FaRegStar /></h1>
        {arrayProjects.map((project) => 
            <ProjectCards key={project.name} project={project} />
        )}
      </div>
    </>
  )
}

export default Projects