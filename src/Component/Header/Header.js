import React, {useState} from 'react'
import './header.css'
import {Link} from 'react-router-dom'
const Header = () => {
    return (
        <div>
            <ul className="nav justify-content-center">
                <li className="nav-item text" >
                    <Link className="nav-link" to="/profile" style={{color:'whitesmoke'}}>About</Link>
                </li>
                <li className="nav-item text">
                    <Link className="nav-link" to="/projects"  style={{color:'whitesmoke'}}>Projects</Link>
                </li>
                <li className="nav-item text">
                    <Link className="nav-link" to="/work"  style={{color:'whitesmoke'}}>Work</Link>
                </li>
                </ul>
        </div>
    )
}

export default Header
