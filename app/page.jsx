import React from 'react'
import Header from './Header'
import Projects from './Projects'
import Footer from './Footer'
import "../css/index.css"
import Experiences from './Experiences'

const Home = () => {
  return (
    <main>
      <Header/>
      <Experiences/>
      <Projects/>
      <Footer/>
    </main>
  )
}

export default Home