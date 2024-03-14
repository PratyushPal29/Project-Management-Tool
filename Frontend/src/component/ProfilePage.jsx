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
import { useAuth } from '../contexts';

export default function ProfilePage() {
  const{currentUser }=useAuth();
  console.log(currentUser)
  const url=currentUser.photoURL
  return (
    <section style={{ backgroundColor: 'beige' ,borderRadius:"50px"}}>
      <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol>
            <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
            
            </MDBBreadcrumb>
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol lg="4" style={{backgroundImage:"linear-gradient(teal white)"}}>
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center" style={{margin:"0rem 20rem 5rem 40rem"}}>
                <MDBCardImage
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNK4d0igyhvVVsYW2LIAn45LUbcWZpewEerQ&usqp=CAU"
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '250px',height:"250px",justifyContent:"center",borderRadius:"350px" }}
                  fluid />
                <p className="text-muted mb-1">Full Stack Developer</p>
                <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
                <div className="d-flex justify-content-center mb-2" style={{gap:"3rem"}}>
                  <MDBBtn style={{backgroundColor:"teal",color:"white",padding:"20px",marginLeft:"2rem",borderRadius:"20px"}}>Follow</MDBBtn>
                  <MDBBtn style={{backgroundColor:"teal",color:"white",padding:"20px",borderRadius:"20px"}}outline className="ms-1">Message</MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>

            <MDBCard className="mb-4 mb-lg-0" style={{margin:"0rem 20rem 5rem 40rem",justifyContent:"center"}}>
              <MDBCardBody className="p-0">
                <MDBListGroup flush className="rounded-3">
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fas icon="globe fa-lg text-warning" />
                    <MDBCardText>https://mdbootstrap.com</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fab icon="github fa-lg" style={{ color: '#333333' }} />
                    <MDBCardText>mdbootstrap</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fab icon="twitter fa-lg" style={{ color: '#55acee' }} />
                    <MDBCardText>@mdbootstrap</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fab icon="instagram fa-lg" style={{ color: '#ac2bac' }} />
                    <MDBCardText>mdbootstrap</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fab icon="facebook fa-lg" style={{ color: '#3b5998' }} />
                    <MDBCardText>mdbootstrap</MDBCardText>
                  </MDBListGroupItem>
                </MDBListGroup>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="8">
            <MDBCard style={{margin:"0rem 5rem 5rem 5rem",border:"solid teal",borderRadius:"20px",padding:"15px"}} className="mb-4" >
              <MDBCardBody style={{backgroundImage: "linear-gradient(teal pink)",margin:"0rem 25rem 5rem 25rem",borderRadius:"20px"}}>
                <MDBRow>
                  <MDBCol sm="3" style={{width:"150px",height:"5vw"}}>
                    <MDBCardText style={{fontWeight:"bold"}}>Full Name <br/>{currentUser? currentUser.displayName: null}</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted"></MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText style={{fontWeight:"bold"}}>Email<br/>{currentUser? currentUser.email: null}</MDBCardText>
                  </MDBCol>
                  
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText style={{fontWeight:"bold"}}>Phone<br/>{currentUser? currentUser.phone: null}</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText style={{fontWeight:"bold"}} className="text-muted">(097) 234-5678</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText style={{fontWeight:"bold"}}>Mobile</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText style={{fontWeight:"bold"}} className="text-muted">(098) 765-4321</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText style={{fontWeight:"bold"}}>Address</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText style={{fontWeight:"bold"}} className="text-muted">Bay Area, San Francisco, CA</MDBCardText>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>

            <MDBRow>
              <MDBCol md="6">
                <MDBCard style={{margin:"0rem 25rem 5rem 30rem",border:"solid teal",padding:"30px",borderRadius:"20px"}} className="mb-4 mb-md-0" >
                  <MDBCardBody>
                    <MDBCardText className="mb-4"><span className="text-primary font-italic me-1">assigment</span> Project Status</MDBCardText>
                    <MDBCardText className="mb-1" style={{ fontSize: '.77rem' }}>Web Design</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={80} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Website Markup</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={72} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>One Page</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={89} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Mobile Template</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={55} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Backend API</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={66} valuemin={0} valuemax={100} />
                    </MDBProgress>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>

              <MDBCol md="6">
                <MDBCard style={{margin:"0rem 25rem 5rem 30rem",border:"solid teal",padding:"30px",borderRadius:"20px"}} className="mb-4 mb-md-0">
                  <MDBCardBody>
                    <MDBCardText className="mb-4"><span className="text-primary font-italic me-1">assigment</span> Project Status</MDBCardText>
                    <MDBCardText className="mb-1" style={{ fontSize: '.77rem' }}>Web Design</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={80} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Website Markup</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={72} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>One Page</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={89} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Mobile Template</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={55} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Backend API</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={66} valuemin={0} valuemax={100} />
                    </MDBProgress>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}