import React, {useState} from 'react'

const Project = () => {
    const [projectList, setProjectList] = useState([{
        project_name: 'Mobile App for Rockford',
        year:'01/2019 - 04/2019',
        description: 'A mobile app for customizing stock and handling location wise'
    },{
        project_name: 'B.Tech Project',
        year:'06/2019 - 06/2020',
        description: 'Fire Extinguishing Support System for fire station where user can report the fire station using app or using IoT if Alarms the nearest Fire Station for help'
    },{
        project_name: 'Diploma Project',
        year:'06/2016 - 04/2017',
        description: 'TiffinVilla : Android Application to get user the home made food.'
    },{
        project_name: 'NGO Project',
        year:'01/2019 - 04/2019',
        description: 'A small Website for NGO'
    }])
    return (
        <div>
            <h1>Personal Projects</h1>
            <div className="row m-0">
                {projectList.map((project) => {
                    return <div className="col-md-4" style={{margin:'1%'}}>
                        <div className="card" style={{background:'lightslategrey', height:'100%',padding:'10%'}}>
                            <h2>{project.project_name}</h2>
                            <h5>{project.year}</h5>
                            <p>{project.description}</p>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Project
