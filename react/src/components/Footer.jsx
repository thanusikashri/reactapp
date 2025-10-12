import React from 'react'
import './Footer.css'

function Footer({text}) {
  return (
    <div>
      <footer className='footer'> 
        {text}
      </footer>
    </div>
  )
}

export default Footer
