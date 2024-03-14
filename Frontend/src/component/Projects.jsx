import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function Project() {
    return (
        <div style={{ textAlign: "center", width: "100%", height: "100vh", margin: "auto" }}>
            <div>
                <h1>Projects</h1>
            </div>
            <div style={{display: "flex", margin: "auto"}}>
                <Card sx={{ maxWidth: 345, borderRadius: "20px", border: "2px solid teal", margin: "2vh" }}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Name
                        </Typography>
                        <Typography variant="body2" color="text.secondary" justifyContent='space-between'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque quam officia porro quidem cum obcaecati velit corrupti repellat nostrum dolores nisi temporibus nobis illo, alias a. Libero esse minima distinctio?
                        </Typography>
                    </CardContent>
                    <CardActions style={{ alignContent: "center" }}>
                        <Button style={{ borderRadius: "20px", backgroundColor: "teal", marginLeft: "8rem"  }}><Link style={{ textDecoration: "none", color: "white" }}>Open</Link></Button>
                    </CardActions>
                </Card>
                <Card sx={{ maxWidth: 345, borderRadius: "20px", border: "2px solid teal", margin: "2vh" }}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Name
                        </Typography>
                        <Typography variant="body2" color="text.secondary" justifyContent='space-between'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque quam officia porro quidem cum obcaecati velit corrupti repellat nostrum dolores nisi temporibus nobis illo, alias a. Libero esse minima distinctio?
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button style={{ borderRadius: "20px", backgroundColor: "teal", marginLeft: "8rem" }}><Link to={"/projdetails"} style={{ textDecoration: "none", color: "white" }}>Open</Link></Button>
                    </CardActions>
                </Card>
            </div>
        </div>

    );
}