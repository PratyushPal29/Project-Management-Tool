/*Project Name, Project Details */
import React, { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import {
    FormGroup,
    FormControl,
    InputLabel,
    Input,
    Button,
    makeStyles,
    TextField,
    styled,
    Card,
    CardContent,
    Autocomplete,
    Box,
    Typography,
    Grid,
    Slider,
    Fab,
    Select,
    Chip,
    MenuItem,
    OutlinedInput,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { addProject } from "../api/project";

const Inputfield = styled(FormControl)`
  margin: auto;
  width: 70vh;
  margin-bottom: 2vh;
  color: white;
`;

const CreateProject = () => {
    //projName,projdesc
    const [form,setform]=useState(false)
    const handleSubmit = ()=>{
        setform(true)
    }
    const onSubmit = async (e) => {
        e.preventDefault()
        
    }
    return (
        <>
            <h1
                className="text-center my-4 align-items-center"
                style={{ color: "black", paddingTop: "5vh", textAlign:"center" }}
            >
                Create Project
            </h1>
            <FormGroup style={{ margin: "auto" }} onSubmit={handleSubmit}>
                <Inputfield style={{marginBottom: "2rem"}}>
                    <TextField id="standard-basic" label="Name" variant="standard" />
                </Inputfield>
                <Inputfield>
                    <TextField id="standard-basic" label="Details" variant="standard" />
                </Inputfield>
                
                <Button>Submit</Button>
            </FormGroup >
        </>

    )
}

export default CreateProject;