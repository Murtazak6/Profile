import React from 'react'
import './about.css'
import ReactTypingEffect from 'react-typing-effect'
const About = () => {
    return (
        <div className="about">
            <h1>Hi.</h1>
            <h1>I 'm Murtaza,</h1>
            <div>
            <ReactTypingEffect
                text={["Hybrid App and Web Developer"]}
                cursorRenderer={cursor => <h1>{cursor}</h1>}
                displayTextRenderer={(text, i) => {
                return (
                    <h1>
                    {text.split('').map((char, i) => {
                        const key = `${i}`;
                        return (
                        <span
                            key={key}
                            style={i%2 === 0 ? { color: '#e1e1e1'} : {color:'#fefefe'}}
                        >{char}</span>
                        );
                    })}
                    </h1>
                );
                }}        
            />
            </div>
            <h4>Front-end Development | Flutter Development | Android Studio</h4>
            <h6>Html, CSS, Bootstrap, React, JS, Flutter, python, Nodejs, Java</h6>
        </div>
    )
}

export default About





// import React from 'react'
// import './about.css'
// import { profile } from '../../profiledata'
// import appdevelopmentimage from '../../images/ic_launcher.png'
// import mainlogo from '../../images/logo.svg'

// const About = () => {
//     return (
//         <div className="about">
//             <div className="row">
//                 <div className="col-md-8">
//                     <div className="interest">
//                         <h3>I am a FrontEnd Developer for web and app Development. I have an intermediate expertise to built a intuitive user experience.</h3>
//                         <h3>:</h3>
//                         <div className="pad">
//                             <h4>
//                                 Hybrid App Developer,
//                             </h4>
//                             <p style={{fontSize:'20px', padding: '0 2%', fontFamily:'fantasy'}}>Flutter, React Native</p>

//                             <h4>
//                                 Web Developer,
//                             </h4>
//                             <p style={{fontSize:'20px',padding: '0 2%', fontFamily:'fantasy'}}>
//                                 React, Html, Css, Bootstrap, Javascipt
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//                 {/* <div className="col-md-6">
//                     <form>
//                         <div className="row">
//                             <div className="col-md-6">
//                                 Name:
//                                 <input className="form-control" placeholder="Name"></input>
//                             </div>
//                             <div className="col-md-6">
//                                 Email:
//                                 <input className="form-control" placeholder="Email"></input>
//                             </div>
//                         </div>
//                         <div>
//                             Subject:
//                             <input className="form-control" placeholder="Subject"></input>
//                         </div>
//                         <div>
//                             Message:
//                             <textarea className="form-control" placeholder="Message" ></textarea>
//                         </div>
//                         <div style={{display:'flex', justifyContent:'flex-end', margin:'3% 0'}}>
//                             <button className="btn btn-success">Submit</button>
//                         </div>
//                     </form>

//                 </div> */}

//             </div>
//         </div>
//     )
// }

// export default About
