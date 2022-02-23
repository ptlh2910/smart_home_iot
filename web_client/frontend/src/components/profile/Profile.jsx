import React from "react";
import { Segment, Grid, Header, Divider, Image, Icon } from "semantic-ui-react";
import "./Profile.css"
class Profile extends React.Component {
  render() {
    return (
      <Grid container textAlign="center" style={{ marginTop: "50px" }}>
        <Icon name="chevron left">BACK</Icon>
        <Segment
          style={{ minWidth: "1000px", minHeight: "500px", width: "1000px" }}
          textAlign="left"
        >
          <Image
            className="profile-image"
            src="https://image.freepik.com/free-vector/abstract-logo-with-colorful-leaves_1025-695.jpg"
            circular
            size="small"
          />
          <Header as="h1" textAlign="center" floated="left">
            SMART HOME GROUP12
          </Header>
          <Grid container columns={2}>
            <Grid.Column>
              <Grid container>
                <Grid.Row columns={2}>
                  <Grid.Column style={{ textAlign: "right" }}>
                    <Header as="h4" color="orange">
                      YOUR NAME
                    </Header>
                  </Grid.Column>
                  <Grid.Column>
                    <b>Tran Van Phuc</b>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={2}>
                  <Grid.Column style={{ textAlign: "right" }}>
                    <Header as="h4" color="orange">
                      {" "}
                      EMAIL
                    </Header>
                  </Grid.Column>
                  <Grid.Column>
                    <b>phuc@gmail.com</b>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={2}>
                  <Grid.Column style={{ textAlign: "right" }}>
                    <Header as="h4" color="orange">
                      {" "}
                      MEMBER 1
                    </Header>
                  </Grid.Column>
                  <Grid.Column />
                  <Grid.Column style={{ textAlign: "right" }}>
                    <Header as="h5" style={{ fontStyle: "italic" }}>
                      {" "}
                      Name:
                    </Header>
                  </Grid.Column>
                  <Grid.Column>
                    <b>Hang PTL</b>
                  </Grid.Column>
                  <Grid.Column style={{ textAlign: "right" }}>
                    <Header as="h5" style={{ fontStyle: "italic" }}>
                      {" "}
                      Email:
                    </Header>
                  </Grid.Column>
                  <Grid.Column style={{ paddingBottom: " 1px" }}>
                    <b>hang@gmail.com</b>
                  </Grid.Column>
                  <Grid.Column style={{ textAlign: "right" }}>
                    <Header as="h5" style={{ fontStyle: "italic" }}>
                      {" "}
                      Phone:
                    </Header>
                  </Grid.Column>
                  <Grid.Column style={{ paddingBottom: " 1px" }}>
                    <b>(541) 754-3010</b>
                  </Grid.Column>
                  <Grid.Column style={{ textAlign: "right" }}>
                    <Header as="h5" style={{ fontStyle: "italic" }}>
                      {" "}
                      Password:
                    </Header>
                  </Grid.Column>
                  <Grid.Column style={{ paddingBottom: " 1px" }}>
                    <b>*************</b>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={2}>
                  <Grid.Column style={{ textAlign: "right" }}>
                    <Header as="h4" color="orange">
                      {" "}
                      MEMBER 2
                    </Header>
                  </Grid.Column>
                  <Grid.Column />
                  <Grid.Column style={{ textAlign: "right" }}>
                    <Header as="h5" style={{ fontStyle: "italic" }}>
                      {" "}
                      Name:
                    </Header>
                  </Grid.Column>
                  <Grid.Column style={{ paddingBottom: " 1px" }}>
                    <b>Minh Anh</b>
                  </Grid.Column>

                  <Grid.Column style={{ textAlign: "right" }}>
                    <Header as="h5" style={{ fontStyle: "italic" }}>
                      {" "}
                      Email:
                    </Header>
                  </Grid.Column>
                  <Grid.Column style={{ paddingBottom: " 1px" }}>
                    <b>MA@gmail.com</b>
                  </Grid.Column>
                  <Grid.Column style={{ textAlign: "right" }}>
                    <Header as="h5" style={{ fontStyle: "italic" }}>
                      {" "}
                      Phone:
                    </Header>
                  </Grid.Column>
                  <Grid.Column style={{ paddingBottom: " 1px" }}>
                    <b>(541) 754-3010</b>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Grid.Column>
            <Grid.Column>
              <Grid container>
                <Grid.Row columns={1}>
                  <Grid.Column>
                    <Header as="h4" color="orange">
                      ABOUT YOUR HOUSE
                    </Header>
                  </Grid.Column>
                  <Grid.Column style={{ textAlign: "justified" }}>
                    <b>
                      Amazon.com, Inc., doing business as Amazon, is an American
                      electronic commerce and cloud computing company based in
                      Seattle, Washington that was founded by Jeff Bezos on July
                      5, 1994.
                    </b>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={1}>
                  <Grid.Column>
                    <Header as="h4" color="orange">
                      ADDRESS
                    </Header>
                  </Grid.Column>
                  <Grid.Column style={{ textAlign: "justified" }}>
                    <b>
                      Amazon.com, Inc., doing business as Amazon, is an American
                      electronic commerce and cloud computing company based in
                      Seattle, Washington that was founded by Jeff Bezos on July
                      5, 1994.
                    </b>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Grid.Column>
          </Grid>
          <Divider className="api-divider" />
          <Grid container>
            <Grid.Row columns={4}>
              <Grid.Column style={{ textAlign: "right" }}>
                <Header as="h4" color="orange">
                  {" "}
                  CLIENT ID
                </Header>
              </Grid.Column>
              <Grid.Column>***********************</Grid.Column>
              <Grid.Column>
                <Header
                  as="h4"
                  color="orange"
                  width={1}
                  style={{ textAlign: "right" }}
                >
                  {" "}
                  CLIENT SECRET
                </Header>
              </Grid.Column>
              <Grid.Column style={{ textAlign: "left" }}>
                ***********************
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </Grid>
    );
  }
}
export default Profile;

