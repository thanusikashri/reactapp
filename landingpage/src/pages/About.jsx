import React from 'react'
import './Page.css'

function About(props) {
  return (
    <section className='page'>
      <h2>{props.title}</h2>
      <h3>
        From sun-drenched sandy beaches with crystal-clear blue oceans, to breathtaking mountain landscapes and lush
        forests, we've got you covered. Don't miss your chance! We have a tempting offer for: the first 20
        people who apply for the tour will receive a 20% discount on purchaces from our partners.
      </h3>
      <div>
        <div>
          <h2>10</h2>
          <p>Years of Experience</p>
        </div>
        <div>
          <h2>3000</h2>
          <p>Satisfied Clients</p>
        </div>
        <div>
          <h2>80</h2>
          <p>Countries Covered</p>
        </div>
      </div>
    </section>
  )
}

export default About
