import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { getProject } from '../api/project'; // Update this path to your API file
import { useAuth } from '../contexts'
export default function Project() {
    const [projects, setProjects] = useState([]);
    const { currentUser } = useAuth()
    useEffect(() => {
        const fetchUserProjects = async () => {
            try {
                // Fetch all projects
                const allProjects = await getProject();

                const userProjects = allProjects.filter(project => project.id === currentUser.uid);

                setProjects(userProjects);
                // console.log(userProjects)
            } catch (error) {
                console.error('Error fetching user projects:', error);
            }
        };

        if (currentUser) {
            fetchUserProjects();
        }
    }, [currentUser]);
    return (
        <div style={{ textAlign: 'center', height: "100vh", width: '100%', margin: 'auto' }}>
            <div>
                <h1>Projects</h1>
            </div>
            <div className="container">
                <div className="container row" style={{ display: "flex", flexWrap: "wrap" }}>
                    {projects?.map((project, index) => (

                        <div className="col-md-3 mb-3">
                            <Card key={index} sx={{ width: "20rem", height: "12rem", borderRadius: '20px', border: '2px solid teal', margin: '2vh' }}>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {project.projName}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" justifyContent="space-between">
                                        {project.projDesc}
                                    </Typography>
                                </CardContent>
                                <CardActions>

                                    <Button style={{ borderRadius: '20px', backgroundColor: 'teal',display: "flex", margin: "auto" }}>
                                        <Link to={`/projdetails/${project.id}`} style={{ textDecoration: 'none', color: 'white' }}>
                                            Open
                                        </Link>
                                    </Button>
                                </CardActions>
                            </Card>
                        </div>

                    ))}
                </div>
            </div>
        </div>
    );
}
