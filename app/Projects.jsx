import React from 'react'
import "../css/projects.css"
import ProjectCards from './ProjectCards'
import { FaRegStar } from "react-icons/fa";

const Projects = () => {

  const arrayProjects = [
    {name: "Web Site (Automata)", imgProject: "/OneAutomata.png", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum saepe architecto nulla cumque minus esse fugiat mollitia tempore laudantium dolor, suscipit ab incidunt quod sapiente sunt pariatur ex expedita reprehenderit?", tech: ["Python 3", "HTML", "CSS", "MySQL"], img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/800px-Python-logo-notext.svg.png", result: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum saepe architecto nulla cumque minus esse fugiat mollitia tempore laudantium dolor, suscipit ab incidunt quod sapiente sunt pariatur ex expedita reprehenderit?", url: "https://oneautomata.com/"},
    {name: "Uber Eats Clone", imgProject: "/OneAutomata.png", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum saepe architecto nulla cumque minus esse fugiat mollitia tempore laudantium dolor, suscipit ab incidunt quod sapiente sunt pariatur ex expedita reprehenderit?", tech: ["Python 3", "HTML", "CSS", "MySQL"], img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/800px-Python-logo-notext.svg.png", result: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum saepe architecto nulla cumque minus esse fugiat mollitia tempore laudantium dolor, suscipit ab incidunt quod sapiente sunt pariatur ex expedita reprehenderit?", url: ""},
    {name: "Whats Up Clone", imgProject: "/OneAutomata.png", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum saepe architecto nulla cumque minus esse fugiat mollitia tempore laudantium dolor, suscipit ab incidunt quod sapiente sunt pariatur ex expedita reprehenderit?", tech: ["Python 3", "HTML", "CSS", "MySQL"], img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/800px-Python-logo-notext.svg.png", result: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum saepe architecto nulla cumque minus esse fugiat mollitia tempore laudantium dolor, suscipit ab incidunt quod sapiente sunt pariatur ex expedita reprehenderit?", url: "https://github.com/Johan401/Chapp"},
    {name: "Emotion Detection", imgProject: "/OneAutomata.png", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum saepe architecto nulla cumque minus esse fugiat mollitia tempore laudantium dolor, suscipit ab incidunt quod sapiente sunt pariatur ex expedita reprehenderit?", tech: ["Python 3", "HTML", "CSS", "MySQL"], img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/800px-Python-logo-notext.svg.png", result: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum saepe architecto nulla cumque minus esse fugiat mollitia tempore laudantium dolor, suscipit ab incidunt quod sapiente sunt pariatur ex expedita reprehenderit?", url: "https://github.com/Johan401/Emotion-detection"},
    {name: "CMS (Symbiotic)", imgProject: "/CMS.png", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum saepe architecto nulla cumque minus esse fugiat mollitia tempore laudantium dolor, suscipit ab incidunt quod sapiente sunt pariatur ex expedita reprehenderit?", tech: ["Python 3", "HTML", "CSS", "MySQL"], img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/800px-Python-logo-notext.svg.png", result: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum saepe architecto nulla cumque minus esse fugiat mollitia tempore laudantium dolor, suscipit ab incidunt quod sapiente sunt pariatur ex expedita reprehenderit?", url: ""},
    {name: "Web Api Polution", imgProject: "/ACMTEC.jpg", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum saepe architecto nulla cumque minus esse fugiat mollitia tempore laudantium dolor, suscipit ab incidunt quod sapiente sunt pariatur ex expedita reprehenderit?", tech: ["Python 3", "HTML", "CSS", "MySQL"], img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/800px-Python-logo-notext.svg.png", result: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum saepe architecto nulla cumque minus esse fugiat mollitia tempore laudantium dolor, suscipit ab incidunt quod sapiente sunt pariatur ex expedita reprehenderit?", url: "https://github.com/Johan401/ACMTEC"}
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