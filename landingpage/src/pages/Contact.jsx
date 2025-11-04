import React from 'react'
import './Page.css'
import inst from '../assets/inst.webp'
import wp from '../assets/wp.webp'
import tw from '../assets/tw.webp'
import bg from '../assets/bg.jpg'

function Contact(props) {
  return (
    <section className='page'>
      <h1>{props.title}</h1>
        
        <div>
            <h3>Get in Touch:</h3>
            <p><strong>Email:</strong> <a href="mailto:info@travelx.com">
                info@travelx.com</a></p>
            <p><strong>Phone:</strong> <a href="tel:+919876543210">
                +91 98765 43210</a></p> 
            <img className="imagee" src={bg} alt="background" />

            <h3>Follow Us:</h3>
            <div class="logo">
                <a href="https://www.instagram.com/">
                    <img src={inst} alt="Instagram" width="37" />
                </a>
                <a href="https://www.twitter.com">
                    <img src={tw} alt="Twitter" width="37" />
                </a>
                <a href="https://www.whatsapp.com">
                    <img src={wp} alt="Whatsapp" width="37" />
                </a> 
            </div>
        </div>
    </section>
  )
}

export default Contact
