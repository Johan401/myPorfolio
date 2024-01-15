import React from 'react'
import Header from './Header'
import Projects from './Projects'
import Footer from './Footer'
import "../css/index.css"
import Experiences from './Experiences'
import Certifications from './Certifications'

const Home = () => {
  return (
    <main>
      <div className='mainContainer'>
        <Header/>
        <Experiences/>
        <Projects/>
        <Certifications />
        <Footer/>
      </div>
    </main>
  )
}

export default Home