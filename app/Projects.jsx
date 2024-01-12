import React from 'react'
import "../css/projects.css"
import ProjectCards from './ProjectCards'
import { FaRegStar } from "react-icons/fa";

const Projects = () => {

  const arrayProjects = [
    {name: "Web Site (Automata)", imgProject: "/OneAutomata.png", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum saepe architecto nulla cumque minus esse fugiat mollitia tempore laudantium dolor, suscipit ab incidunt quod sapiente sunt pariatur ex expedita reprehenderit?", tech: ["Python 3", "HTML", "CSS", "MySQL"], img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/800px-Python-logo-notext.svg.png", result: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum saepe architecto nulla cumque minus esse fugiat mollitia tempore laudantium dolor, suscipit ab incidunt quod sapiente sunt pariatur ex expedita reprehenderit?"},
    {name: "Uber Eats Clone", imgProject: "/OneAutomata.png", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum saepe architecto nulla cumque minus esse fugiat mollitia tempore laudantium dolor, suscipit ab incidunt quod sapiente sunt pariatur ex expedita reprehenderit?", tech: ["Python 3", "HTML", "CSS", "MySQL"], img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/800px-Python-logo-notext.svg.png", result: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum saepe architecto nulla cumque minus esse fugiat mollitia tempore laudantium dolor, suscipit ab incidunt quod sapiente sunt pariatur ex expedita reprehenderit?"},
    {name: "Web Scrapping", imgProject: "/OneAutomata.png", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum saepe architecto nulla cumque minus esse fugiat mollitia tempore laudantium dolor, suscipit ab incidunt quod sapiente sunt pariatur ex expedita reprehenderit?", tech: ["Python 3", "HTML", "CSS", "MySQL"], img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/800px-Python-logo-notext.svg.png", result: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum saepe architecto nulla cumque minus esse fugiat mollitia tempore laudantium dolor, suscipit ab incidunt quod sapiente sunt pariatur ex expedita reprehenderit?"},
    {name: "CMS (Symbiotic)", imgProject: "/CMS.png", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum saepe architecto nulla cumque minus esse fugiat mollitia tempore laudantium dolor, suscipit ab incidunt quod sapiente sunt pariatur ex expedita reprehenderit?", tech: ["Python 3", "HTML", "CSS", "MySQL"], img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/800px-Python-logo-notext.svg.png", result: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum saepe architecto nulla cumque minus esse fugiat mollitia tempore laudantium dolor, suscipit ab incidunt quod sapiente sunt pariatur ex expedita reprehenderit?"},
    {name: "Web Api Polution", imgProject: "/ACMTEC.jpg", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum saepe architecto nulla cumque minus esse fugiat mollitia tempore laudantium dolor, suscipit ab incidunt quod sapiente sunt pariatur ex expedita reprehenderit?", tech: ["Python 3", "HTML", "CSS", "MySQL"], img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/800px-Python-logo-notext.svg.png", result: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum saepe architecto nulla cumque minus esse fugiat mollitia tempore laudantium dolor, suscipit ab incidunt quod sapiente sunt pariatur ex expedita reprehenderit?"}
  ]

  return (
    <>
    
      <div className='projectContainer'>
        <h1 id='projects'>Projects <FaRegStar /></h1>
        {arrayProjects.map((project) => 
            <ProjectCards project={project} />
        )}
      </div>
    </>
  )
}

export default Projects