import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className="n-wrapper container">
        
        <div className="n-left">
            <div className="n-name">Tofa<span>yel.</span></div>
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Service</li>
                    <li>Portfolio</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar