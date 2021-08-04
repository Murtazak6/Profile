import React from 'react'
import './about.css'
import ReactTypingEffect from 'react-typing-effect'
const About = () => {
    return (
        <div className="about">
            {/* <h1>Hi.</h1> */}
            {/* <h1>I 'm Murtaza,</h1> */}
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
            <label>Contact No.: +91 9819542253 / +91 7021943826 </label>
        </div>
    )
}

export default About