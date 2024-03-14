import React from 'react';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBProgress,
  MDBProgressBar,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useAuth } from '../contexts';
import { Link } from 'react-router-dom';


export default function ProfilePage() {
  const { currentUser } = useAuth();
  console.log(currentUser)
  const url = currentUser && currentUser.photoURL ? currentUser.photoURL:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNK4d0igyhvVVsYW2LIAn45LUbcWZpewEerQ&usqp=CAU';
  return (
    <section style={{ backgroundColor: '#8fd9bf', borderRadius: "50px", width: "90%", margin: "5rem" }}>
      <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol>
            <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">

            </MDBBreadcrumb>
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol lg="4" style={{ backgroundImage: "linear-gradient(teal white)" }}>
            <MDBCard className="mb-4">
              <MDBCardBody className="center" style={{  }}>
                <MDBCardImage
                  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNK4d0igyhvVVsYW2LIAn45LUbcWZpewEerQ&usqp=CAU'
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '250px', height: "250px", justifyContent: "center", borderRadius: "350px", marginTop: "2rem",marginLeft: "35rem", marginBottom: "2rem" }}
                  fluid />
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <div className="text-muted mb-1" style={{ fontSize: "20px", textAlign: "center", marginBottom: "2rem" }}>Full Stack Developer | Bay Area, San Francisco, CA</div>
          <MDBCol lg="8">
            <MDBCard style={{ margin: "0rem 5rem 2rem 5rem", border: "solid teal", borderRadius: "20px", padding: "15px" }} className="mb-4" >
              <MDBCardBody style={{ backgroundImage: "linear-gradient(teal pink)", margin: "0rem 25rem 5rem 25rem", borderRadius: "20px" }}>
                <MDBRow>
                  <MDBCol sm="3" style={{ width: "150px", height: "3vw" }}>
                    <MDBCardText style={{ fontWeight: "bold" }}>Full Name <br />{currentUser ? currentUser.displayName : null}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr style={{height: "5px", background: "teal", border: "none" }}/>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText style={{ fontWeight: "bold" }}>Email<br />{currentUser ? currentUser.email : null}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr style={{height: "5px", background: "teal", border: "none" }}/>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText style={{ fontWeight: "bold" }}>Phone <br />{currentUser ? currentUser.phone : "(097) 234-5678"}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr style={{height: "5px", background: "teal", border: "none" }}/>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText style={{ fontWeight: "bold" }}>Address <br/> {currentUser ? currentUser.phone : "Bay Area, San Francisco, CA"}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr style={{height: "5px", background: "teal", border: "none" }}/>
              </MDBCardBody>
            </MDBCard>
            <div style={{ display: "flex", marginLeft: "16rem" }}>
              <Card sx={{ maxWidth: 345, borderRadius: "20px", border: "2px solid teal", margin: "5vh" }}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Name
                  </Typography>
                  <Typography variant="body2" color="text.secondary" justifyContent='space-between'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque quam officia porro quidem cum obcaecati velit corrupti repellat nostrum dolores nisi temporibus nobis illo, alias a. Libero esse minima distinctio?
                  </Typography>
                </CardContent>
                <CardActions style={{ alignContent: "center" }}>
                  <Button style={{ borderRadius: "20px", backgroundColor: "teal", marginLeft: "8rem" }}><Link style={{ textDecoration: "none", color: "white" }}>Open</Link></Button>
                </CardActions>
              </Card>
              <Card sx={{ maxWidth: 345, borderRadius: "20px", border: "2px solid teal", margin: "5vh" }}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Name
                  </Typography>
                  <Typography variant="body2" color="text.secondary" justifyContent='space-between'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque quam officia porro quidem cum obcaecati velit corrupti repellat nostrum dolores nisi temporibus nobis illo, alias a. Libero esse minima distinctio?
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button style={{ borderRadius: "20px", backgroundColor: "teal", marginLeft: "8rem", marginBottom: "1rem" }}><Link to={"/projdetails"} style={{ textDecoration: "none", color: "white" }}>Open</Link></Button>
                </CardActions>
              </Card>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}