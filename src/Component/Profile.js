import React, {useEffect} from 'react'
import img from '../images/IMG20210219172127.jpg'
import './profile.css'
import Header from './Header/Header.js'
import Routes from '../Routes'
// import { useTime } from 'react-time-sync'
import { NtpTimeSync } from "ntp-time-sync";
import { BrowserRouter } from 'react-router-dom'

const Profile = () => {
    useEffect(() => {
        const timeSync = NtpTimeSync.getInstance()
        const result = timeSync.getTime();
        console.log("real time", result.now);
    }, [])
    return (
            <div>
                <div className="row m-0">
                    <div className="col-lg-3 left-col">
                        <center>
                            <div style={{width:'300px', margin:'0 0 10% 0'}}>
                                <h1 style={{textAlign:'left'}}>Murtaza S. Kankroliwala</h1>
                            </div>
                        </center>
                        <center>
                            <img src={img} className="profile_img" alt="profile"></img>
                        </center>
                        {/* Time: {Date(currenttime)} */}
                        <center className="m-5 justify-content-space-between">
                            <a href="https://www.linkedin.com/in/murtaza-kankroliwala-938514168/" style={{padding:'5%'}}>
                                <i className="fab fa-linkedin-in" style={{fontSize:'25px'}}></i>
                            </a>
                            <a href="https://github.com/Murtazak6" style={{padding:'5%'}}>
                                <i className="fab fa-github" style={{fontSize:'25px'}}></i>
                            </a>
                            <a href="mailto:mkankroli3@gmailcom" style={{padding:'5%'}}>
                                <i className="fa fa-envelope" style={{fontSize:'25px'}}></i>
                            </a>
                        </center>
                    </div>
                    <div className="col-lg-9 profile-background">
                        <BrowserRouter>
                            <Header />
                            <Routes />
                        </BrowserRouter>
                    </div>
                </div>
            </div>
        
    )
}

export default Profile
