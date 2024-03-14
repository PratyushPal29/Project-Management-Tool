import React from 'react'
import { useAuth } from '../contexts'


const Home = () => {

    return(
        <>
        <div>
            <div className="first" style={{display:"flex",gap:"5rem",backgroundColor:"#edc9af"}}>
                <video src="./ezgif-5-e8ca80924a.mp4" style={{borderRadius:"25px",margin:"5rem 0rem 5rem 10rem"}} autoPlay loop muted alt="videos"></video>
                <div >
                    <h1 style={{margin:"15rem 5rem 5rem 2rem",fontWeight:"bold",fontSize:"60px"}}>Streamline Your Project Journey.</h1>
                </div>
            </div>
            <div className="second" style={{marginLeft:"15rem",width:"450vh",height:"50vw"}}>
                <h2 style={{fontWeight:"bold",fontSize:"30px",marginLeft:"20rem"}}>Why use PM?</h2>
                <ul style={{marginLeft:"15rem",width:"450vh",height:"50vw"}}>
                    <li><h3 style={{fontWeight:"bold",fontSize:"15px"}}>Efficiency Boost:</h3> Our project management website streamlines workflows, saving you time and resources.</li>
                    <li><h3 style={{fontWeight:"bold",fontSize:"15px"}}>Collaboration Made Easy:</h3>  Facilitate seamless collaboration among team members, regardless of their location.</li>
                    <li><h3 style={{fontWeight:"bold",fontSize:"15px"}}>Centralized Information Hub: </h3> Access all project-related documents, updates, and communications in one centralized platform.</li>
                    <li><h3 style={{fontWeight:"bold",fontSize:"15px"}}>Real-Time Insights:</h3> Stay informed with up-to-date progress tracking and reporting features.</li>
                    <li><h3 style={{fontWeight:"bold",fontSize:"15px"}}>Customizable Solutions: </h3> Tailor the platform to fit your specific project management needs and workflows.</li>
                    <li><h3 style={{fontWeight:"bold",fontSize:"15px"}}>Scalability: </h3> Grow your projects effortlessly with our scalable infrastructure and features.</li>
                    <li><h3 style={{fontWeight:"bold",fontSize:"15px"}}>Customizable Solutions: </h3> Tailor the platform to fit your specific project management needs and workflows.</li>
                    <li><h3 style={{fontWeight:"bold",fontSize:"15px"}}>Enhanced Accountability:  </h3> Assign tasks, set deadlines, and track progress to ensure accountability across the team.</li>
                    <li><h3 style={{fontWeight:"bold",fontSize:"15px"}}>Improved Communication: </h3> Foster clear and transparent communication channels among team members.</li>

                </ul>
            </div>
        </div>
        </>
    )
    const { currentUser } = useAuth()
    return (
        <div className='text-2xl font-bold pt-14'>Hello {currentUser.displayName ? currentUser.displayName : currentUser.email}, you are now logged in.</div>
    )
}

export default Home