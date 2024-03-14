import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard() {
    return (
        <div style={{width: "100%", height: "100vh",}}>
            <Card sx={{ maxWidth: 345, borderRadius: "20px", border: "2px solid", margin: "auto" }}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Name
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque quam officia porro quidem cum obcaecati velit corrupti repellat nostrum dolores nisi temporibus nobis illo, alias a. Libero esse minima distinctio?
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </div>
    );
}