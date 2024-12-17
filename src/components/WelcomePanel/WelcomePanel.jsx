import React from 'react'
import { FaLock } from "react-icons/fa";
import image from '../../assets/image.png'
import './WelcomePanel.css'
const WelcomePanel = () => {
  return (
    <div className='container'>
        <img className='logo' src={image} alt='Pocket Notes Logo' />
        <h1 className='welcome-title'>Pocket Notes</h1>
        <p className='info'>Send and receive messages without keeping your phone online. <br />
        Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>


        <p className='encryption'>
          <FaLock style={{ fontSize: '1.5rem' }} />
          end-to-end encrypted
        </p>
    </div>
  )
}

export default WelcomePanel