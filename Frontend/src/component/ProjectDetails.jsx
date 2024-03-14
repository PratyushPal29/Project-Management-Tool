import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProjectById } from "../api/project"; // Update the path to your API file

const ProjDetails = () => {
    const { projectId } = useParams();
    const [project, setProject] = useState(null);

    useEffect(() => {
        const fetchProjectDetails = async () => {
            try {
                const projectData = await getProjectById(projectId);
                setProject(projectData);
                console.log(projectData);
            } catch (error) {
                console.error('Error fetching project details:', error);
            }
        };

        fetchProjectDetails();
    }, [projectId]);

    return (
        <div style={{ width: "100%", height: "100vh" }}>
            <div >
                <h1
                    className="text-center my-4 align-items-center"
                    style={{ color: "black", paddingTop: "5vh", textAlign: "center" }}
                >
                    Project Details
                </h1>
            </div>
            <div className="container" style={{marginLeft: "20rem", width:"60%"}}>
                <div
                    style={{
                        marginTop: "30px",
                        backgroundColor: "white",
                        textAlign: "justify",
                        paddingLeft: "20px",
                        paddingTop: "10px",
                        borderRadius: "20px",
                        border: "2px solid teal"
                    }}
                >
                    <p style={{ fontSize: "25px" }}>Name: {project?.projName}</p>
                    <p style={{ fontSize: "25px" }}>Description: {project?.projdesc}</p>
                    <p style={{ fontSize: "25px" }}>Leader Name: {project?.leaderName}</p>
                </div>
            </div>
        </div>
    );
}

export default ProjDetails;
