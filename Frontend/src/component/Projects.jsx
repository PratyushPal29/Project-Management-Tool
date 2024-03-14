import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { getProject } from '../api/project'; // Update this path to your API file

export default function Project() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const projectData = await getProject();
                setProjects(projectData);
                console.log('Fetched!');
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        };

        fetchProjects();
    }, []);

    return (
        <div style={{ textAlign: 'center', width: '100%', height: '100vh', margin: 'auto' }}>
            <div>
                <h1>Projects</h1>
            </div>
            <div style={{ display: 'flex', margin: 'auto' }}>
                {projects?.map((project, index) => (
                    <Card key={index} sx={{ maxWidth: 345, borderRadius: '20px', border: '2px solid teal', margin: '2vh' }}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {project.projName}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" justifyContent="space-between">
                                {project.projdesc}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button style={{ borderRadius: '20px', backgroundColor: 'teal', marginLeft: '4rem' }}>
                                <Link to={`/projdetails/${project.id}`} style={{ textDecoration: 'none', color: 'white' }}>
                                    Open
                                </Link>
                            </Button>
                        </CardActions>
                    </Card>
                ))}
            </div>
        </div>
    );
}
