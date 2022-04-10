import React from 'react'
import './Aboutme.css'

const Aboutme = () => {
  return (
    <div className="A-content container">
        <div className="A-left">
            <span>About me</span>
            <p>Web developer, <br /> Cyber Security and Web designer </p>
            <div className="btn">
                <button className='button'> 
                    <a href="#" download=''>Download CV</a>
                </button>
            </div>

        </div>
        <div className="A-right">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, debitis? <br /><br />
            Lorem ipsum dolor sit At reiciendis iusto, modi odit incidunt saepe vel ea, quod distinctio ipsum, necessitatibus fuga culpa ad sunt! <br /><br />
            Lorem ipsum dolor sit amet consectetur !
            </p>

        </div>
    </div>
  )
}

export default Aboutme