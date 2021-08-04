import React from 'react'
import { NavLink } from 'react-router-dom'
import './header.css'

const Header = () => {
    return (
        <div>
            <ul className="nav justify-content-center">
                <li className="nav-item text" >
                    <NavLink 
                        className="nav-link" 
                        to={'/profile'}
                        style={{color:'whitesmoke'}}>About</NavLink>
                </li>
                <li className="nav-item text">
                    <NavLink 
                        className="nav-link" 
                        to={`/projects`} 
                        style={{color:'whitesmoke'}}>Projects</NavLink>
                </li>
                <li className="nav-item text">
                    <NavLink 
                        className="nav-link" 
                        to={`/work`} 
                        style={{color:'whitesmoke'}}>Work</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Header
