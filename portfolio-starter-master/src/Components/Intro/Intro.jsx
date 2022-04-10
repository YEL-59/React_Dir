import React from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import Linkedin from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from "../../img/Vector2.png"
import boy from "../../img/boy.png"
import glassesimoji from "../../img/glassesimoji.png"
import thumbup from "../../img/thumbup.png"
import crown from "../../img/crown.png"
const Intro = () => {
  return (
    <div className="i-wrapper">
        <div className="i-left">
            <div className="i-name">
                <span>Hey i am</span>
                <span>Md.Tofayel islam</span>
                <span>I am a Professional web and app developer and it is very crazy journey, Development and product the quality one </span>
            </div>
            <button className="Button i-button">Hire me</button>
            <div className="i-icons">
            <img src={Github} alt="" />
            <img src={Linkedin} alt="" />
            <img src={Instagram} alt="" />
        </div>
        </div>
        
        <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        </div>
    </div>
  )
}

export default Intro