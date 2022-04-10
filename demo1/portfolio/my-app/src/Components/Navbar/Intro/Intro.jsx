import React from 'react'
import './Intro.css'
import Me from '../../../img/me.png'
import Facebook from '../../../img/Facebook.png'
import Twiteer from '../../../img/trw.png'
const Intro = () => {
  return (
    <div className="intro-home">
        <div className="intro-content">
            <div className="intro-img">
                <img src={Me} alt="" />
            </div>
            <div className="intro-text">
                <h1>Hello</h1>
                <p>I am Tofayel, Professional developer & <span>Cyber security</span> and many more <br /> i completed 10 years of experience in many company <br />this journey is crazy.here are  <span>about me</span></p>
                <div className="intro-icons">
                 <img src={Facebook}alt="" />
                 <img src={Twiteer} alt="" />
                 <img src={Facebook}alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Intro