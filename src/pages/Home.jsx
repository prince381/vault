import React from 'react'
import { NavLink } from 'react-router-dom'
import phone from '../assets/images/frame.png'
import wave from '../assets/images/wave.svg'
import '../assets/css/home.css'

export default function Home() {
  return (
    <div className='home container'>
      <section className="hero">
        <div className="hero-content">
          <div className="text-left">
            <h1 className="hero-bold">You don't have to remember your passwords.</h1>
            <p className="subtext">Vault remembers them all for you. Save your passwords and log in to sites with a single click. It's that simple.</p>
            <button className="btn-bordered">
              <span>Sign up</span>
              <span className="dots">..</span>
              <span className="light">It's free</span>
              <span className="outline"></span>
            </button>
          </div>
          <div className="phone-right">
            <img src={phone} alt="iphone frame image" />
          </div>
        </div>
        <img src={wave} alt="wave svg image" className='wave' />
      </section>
    </div>
  )
}
