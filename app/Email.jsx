'use client';
import React from 'react'
import Image from 'next/image'
import "../css/footer.css"
import github from "../public/social/github.png"
import instagram from "../public/social/instagram.png"
import linkedin from "../public/social/linkedin.png"

const Email = () => {

    const handleSendEmail = (event) => {
        event.preventDefault(); 
        console.log("Sendding email")
    }

  return (
    <div className="emailContainer">
        <div className='personalContainer'>
            <h5>Johan Zamora, Software Developer</h5>
            <h6>Excellence in create a great solutions</h6>
            <div className='rowContainer'>
                <p>Innovations</p>
                <p>Problem solve</p>
                <p>Team work</p>
            </div>
            <div className='rowContainer'>
                <Image src={github}/>
                <Image src={linkedin}/>
                <Image src={instagram}/>
            </div>
            <p style={{ fontSize: "10px" }}>Privacy & Legal</p>
        </div>
        <form onSubmit={handleSendEmail}>
            <h2>Email</h2>
            <input 
                className='emailInput'
                id="comment"
                name="comment"
                placeholder='Introduce your email'/>
            <textarea 
                className='emailInput'
                id="comment"
                name="comment"
                rows="4"
                type='text' 
                placeholder='Introduce your comments'/>
            <button className='sendButton'>
                Send
                <div class="arrow-wrapper">
                    <div class="arrow"></div>

                </div>
            </button>
        </form>
    </div>
  )
}

export default Email