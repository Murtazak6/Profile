import React from 'react'
import './header.css'
import { Link, withRouter } from 'react-router-dom'

const Header = () => {
    return (
        <div className="inline-header">
            <Link className="nav-link text" to="/" style={{color:'whitesmoke'}}>About</Link>
            <Link className="nav-link text" to="/projects"  style={{color:'whitesmoke'}}>Projects</Link>
            <Link className="nav-link text" to="/work"  style={{color:'whitesmoke'}}>Work</Link>
        </div>
    )
}

export default withRouter(Header)
