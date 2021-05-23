import React, {useState} from 'react'

const Work = () => {
    const [worklist, setworklist] = useState([{
        work_designation:'Associate Software Developer Intern',
        year:'12/2019 - 03/2020',
        location:'Mulund, Mumbai',
        company:'LogisticsNow',
        description:<div>
            <p> - Android Application as a basic app test</p>
            <p> - Web Application Front-end developement for their Website Using ReactJs mostly on Maps</p>
            <p> - Software Testing</p>
        </div>
    }, {
        work_designation:'Full Stack App and Web Developer',
        year:'03/2020 - 10/2020',
        location:'Mulund, Mumbai',
        company:'Upcloud Technology',
        description:<div>
            <p> - Currently a Team leader for Web and App development</p>
            <p> - App Developer Using Flutter: Doctor's App</p>
            <ul>
                <li>Doctor's App</li>
            </ul>
            <p> - Web Application Development:</p>
            <ul>
                <li>Nima Website</li>
                <li>Main Website</li>
            </ul>
        </div>
    }, {
        work_designation:'Associate Software Developer',
        year:'10/2020 - Currently Working',
        location:'Mulund, Mumbai',
        company:'LogisticsNow',
        description: <div>
            <p> - Web development</p>
            <ul>
                <li>
                    <a href="https://www.lorri.in/" style={{color:'aqua'}}>LoRRI Website</a> changes and new features developed
                </li>
            </ul>
        </div>
    }])
    return (
        <div>
            <h1>Personal Projects</h1>
            <div>
                {worklist.map((work) => {
                    return <div>
                        <div style={{background:'lightslategrey', margin:"1%", padding:'1% 5%'}}>
                            <h2>{work.work_designation}</h2>
                            <div className="row">
                                <div className="col-md-6">
                                    <h5>{work.year}</h5>
                                </div>
                                <div className="col-md-6" style={{justifyContent:'flex-end'}}>
                                    <h6>{work.location}</h6>
                                </div>
                            </div>
                            <div>
                                <p>
                                    {work.description}
                                </p>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Work
