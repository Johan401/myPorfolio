'use client';
import React, { useRef } from 'react'
import Image from 'next/image'
import "../css/footer.css"
import github from "../public/social/github.png"
import instagram from "../public/social/instagram.png"
import linkedin from "../public/social/linkedin.png"
import emailjs from '@emailjs/browser';
import { Toaster, toast } from 'sonner'

const Email = () => {

    const form = useRef();
    const recaptchaRef  = useRef();

    const handleSendEmail = (event) => {
        event.preventDefault(); 
        const recaptchaValue = recaptchaRef.current.getValue();
        console.log(recaptchaValue)
        emailjs.sendForm('service_m6vhowl', 'template_0qmhzse', form.current, 'DyBvbHINSr0R6lKgl')
        .then((result) => {
            toast.success('Email has been sent');
            const formElements = form.current.elements;
            for (let i = 0; i < formElements.length; i++) {
                if (formElements[i].type !== 'submit') { 
                    formElements[i].value = '';
                }
            }
        })
        .catch((error) => {
            console.log(error)
            toast.error('Event has not been sent');
        });
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
        <form ref={form} onSubmit={handleSendEmail}>
            <h2>Email</h2>
            <input 
                className='emailInput'
                id="user_name"
                name="user_name"
                required
                type='name'
                placeholder='Can you write your name?'/>
            <input 
                className='emailInput'
                id="user_company"
                name="user_company"
                required
                type='name'
                placeholder='Where are you work?'/>
            <input 
                className='emailInput'
                id="user_email"
                required
                name="user_email"
                type='email'
                placeholder='Introduce your email'/>
            <textarea 
                className='emailInput'
                id="user_comment"
                name="user_comment"
                rows="4"
                required
                type='text' 
                placeholder='Do you have any feedback for me?'/>
            <button className='sendButton'>
                Send
                <div class="arrow-wrapper">
                    <div class="arrow"></div>

                </div>
            </button>
        </form>
        <Toaster richColors position="bottom-center"  />
    </div>
  )
}

export default Email