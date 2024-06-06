import { useState } from 'react'
import faceLogo from './images/face.png'
import whatLogo from './images/whatsapp.png'
import twittLogo from './images/twitter.png'
import instaLogo from './images/insta.png'
import linkLogo from './images/link.png'
import telegramLogo from './images/telegram.png'
import githubLogo from './images/github.png'
import backLogo from './images/back.png'
import './App.css'

function App() {
  

  return (
    <section className='hero'>
     <div className='bog'>
      <img src={backLogo} alt="my-Logo" />
      <ol>
        <a href="#"><li>HOME</li></a>
        <a href="#"><li>PROJECTS</li></a>
        <a href="#"><li>CONTACT</li></a>
        <a href="#"><li>WEBSITES</li></a>
      </ol>
     </div>
     <div className='front'>
      <h1 className='green'>Hii, I'm John</h1>
      <h1 className='text'>Front<i className='black'>end</i></h1>
      <h1 className='black'>Website Developer</h1>
      <h3>My name is okusanya ifeoluwa. i am a front-end website developer, video editor and <br /> a graphics designer!</h3>
     </div>

    <div className="bg">
      <div className='apps'>
        <a href="https://wa.link/6lwjjk" target="_blank">
          <img src={whatLogo} className="logo face" alt="Whatsapp logo" />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100077331408250" target="_blank">
          <img src={faceLogo} className="logo face" alt="Facebook logo" />
        </a>
        <a href="https://x.com/john_honour01?t=0ob-S2cfa1s7mvX_Hym-XA&s=09" target="_blank">
          <img src={twittLogo} className="logo face" alt="Twitter logo" />
        </a>
        </div>
        <div className='apps'> 
        <a href="https://www.instagram.com/okusanyaifeoluwa?igsh=YWw2aXcyeXR3bzli" target="_blank">
          <img src={instaLogo} className="logo face" alt="Instagram logo" />
        </a>
        <a href="https://www.linkedin.com/in/okusanya-ifeoluwa-517551242?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
          <img src={linkLogo} className="logo face" alt="Linkledin logo" />
        </a>
        <a href="t.me/Okusanyajohn" target="_blank">
          <img src={telegramLogo} className="logo face" alt="Telegram logo" />
        </a>
        </div>
        <div className='apps'>
        <a href="https://github.com/hemherhald" target="_blank">
          <img src={githubLogo} className="logo face" alt="Github logo" />
        </a>
      </div>
      <div>
        <a href="#"><button className='button'>Who am I ? </button></a>
      </div>
      
      </div>
       <footer> &copy; 2024 JON-SPYCE</footer>
    </section>

  )  
}


export default App
