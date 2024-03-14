import React, { useState } from "react";
import { addProject } from "../api/project"; // Update this path to your API file
import {
    FormGroup,
    TextField,
    Button,
} from "@mui/material";
import { useAuth } from '../contexts'
import { Navigate, useNavigate } from "react-router-dom";
const CreateProject = () => {
    const [credentials, setCredentials] = useState({ name: "", details: "" });
    const navi = useNavigate();
    const handleChange = (e) => {
        const { id, value } = e.target;
        setCredentials({ ...credentials, [id]: value });
    };

    const {currentUser}=useAuth()
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addProject({
                userid: currentUser.uid,
                username: currentUser.displayName, // Provide the username here
                projName: credentials.name,
                projdesc: credentials.details,
            });
            console.log("Project added successfully!");
          navi('/');
            // Optionally, you can redirect the user to another page after successful submission
        } catch (error) {
            console.error("Error adding project:", error);
        }
    };

    return (
        <div style={{ width: "100%", height: "100vh" }}>
            <h1
                className="text-center my-4 align-items-center"
                style={{ color: "black", paddingTop: "5vh", textAlign: "center" }}
            >
                Create Project
            </h1>
            <form style={{ margin: "auto" }} onSubmit={handleSubmit}>
                <TextField
                    id="name"
                    label="Name"
                    variant="standard"
                    value={credentials.name}
                    onChange={handleChange}
                    style={{ marginBottom: "2rem" }}
                />
                <TextField
                    id="details"
                    label="Details"
                    variant="standard"
                    value={credentials.details}
                    onChange={handleChange}
                    style={{ marginBottom: "2rem" }}
                />
                <Button type="submit" variant="contained" color="primary">
                    Submit
                </Button>
            </form>
        </div>
    );
};

export default CreateProject;
