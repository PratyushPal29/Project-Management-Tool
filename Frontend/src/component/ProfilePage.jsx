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

export default function ProfilePage() {
  return (
    <section style={{ backgroundColor: '#eee' }}>
      <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol>
            <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
            
            </MDBBreadcrumb>
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center" style={{margin:"0rem 20rem 5rem 20rem"}}>
                <MDBCardImage
                  src="data:image/jpeg;base64,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"
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '50px',height:"150px" }}
                  fluid />
                <p className="text-muted mb-1">Full Stack Developer</p>
                <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
                <div className="d-flex justify-content-center mb-2">
                  <MDBBtn>Follow</MDBBtn>
                  <MDBBtn outline className="ms-1">Message</MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>

            <MDBCard className="mb-4 mb-lg-0">
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
            <MDBCard className="mb-4">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Full Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">Johnatan Smith</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">example@example.com</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Phone</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">(097) 234-5678</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Mobile</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">(098) 765-4321</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Address</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">Bay Area, San Francisco, CA</MDBCardText>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>

            <MDBRow>
              <MDBCol md="6">
                <MDBCard className="mb-4 mb-md-0">
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
                <MDBCard className="mb-4 mb-md-0">
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