import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Slide, Fade, Container, Grid } from "@material-ui/core";
import tele from "../assets/images/tele.jpg";

const useStyles = makeStyles((theme) => ({
  root: {},
  wrapper: {},
  section_one: {
    paddingTop: "50px",
    // paddingBottom: '50px',
  },
  section_two: {
    padding: "50px 0px",
  },
}));

const Contact = () => {
  const classes = useStyles();
  const [mount, setMount] = React.useState(false);
  // const [mountTwo, setMountTwo] = React.useState(false);

  useEffect(() => {
    handleMount();
    // handleMountTwo();
    return () => {};
  }, []);

  const handleMount = () => {
    setMount(true);
  };

  // const handleMountTwo = () => {
  // 	setMountTwo(true);
  // };

  return (
    <div className={classes.root}>
      <Fade
        direction="left"
        in={mount}
        timeout={1000}
        mountOnEnter
        unmountOnExit
      >
        <div className={classes.wrapper}>
          <div className={classes.section_one}>
            <Container>
              <Grid item xs={12} sm={12} md={12} lg={12} align="center">
                <h1>Talk to an expert!</h1>
              </Grid>
            </Container>
          </div>
          <div className={classes.section_two}>
            <Container maxWidth="sm" align="center">
              <Grid container>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <div className="dws">
                    <a href="#">
                      <div className="bloc">
                        <div className="pulse">
                          <div className="phone">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              version="1.1"
                              id="Capa_1"
                              x="0px"
                              y="0px"
                              viewBox="0 0 578.106 578.106"
                              style={{
                                enableBackground: "new 0 0 578.106 578.106",
                              }}
                              xmlSpace="preserve"
                              width="512px"
                              height="512px"
                            >
                              <g>
                                <g>
                                  <path
                                    d="M577.83,456.128c1.225,9.385-1.635,17.545-8.568,24.48l-81.396,80.781    c-3.672,4.08-8.465,7.551-14.381,10.404c-5.916,2.857-11.729,4.693-17.439,5.508c-0.408,0-1.635,0.105-3.676,0.309    c-2.037,0.203-4.689,0.307-7.953,0.307c-7.754,0-20.301-1.326-37.641-3.979s-38.555-9.182-63.645-19.584    c-25.096-10.404-53.553-26.012-85.376-46.818c-31.823-20.805-65.688-49.367-101.592-85.68    c-28.56-28.152-52.224-55.08-70.992-80.783c-18.768-25.705-33.864-49.471-45.288-71.299    c-11.425-21.828-19.993-41.616-25.705-59.364S4.59,177.362,2.55,164.51s-2.856-22.95-2.448-30.294    c0.408-7.344,0.612-11.424,0.612-12.24c0.816-5.712,2.652-11.526,5.508-17.442s6.324-10.71,10.404-14.382L98.022,8.756    c5.712-5.712,12.24-8.568,19.584-8.568c5.304,0,9.996,1.53,14.076,4.59s7.548,6.834,10.404,11.322l65.484,124.236    c3.672,6.528,4.692,13.668,3.06,21.42c-1.632,7.752-5.1,14.28-10.404,19.584l-29.988,29.988c-0.816,0.816-1.53,2.142-2.142,3.978    s-0.918,3.366-0.918,4.59c1.632,8.568,5.304,18.36,11.016,29.376c4.896,9.792,12.444,21.726,22.644,35.802    s24.684,30.293,43.452,48.653c18.36,18.77,34.68,33.354,48.96,43.76c14.277,10.4,26.215,18.053,35.803,22.949    c9.588,4.896,16.932,7.854,22.031,8.871l7.648,1.531c0.816,0,2.145-0.307,3.979-0.918c1.836-0.613,3.162-1.326,3.979-2.143    l34.883-35.496c7.348-6.527,15.912-9.791,25.705-9.791c6.938,0,12.443,1.223,16.523,3.672h0.611l118.115,69.768    C571.098,441.238,576.197,447.968,577.83,456.128z"
                                    fill="#FFFFFF"
                                  />
                                </g>
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <br />
                  <br />

                  <h3>
                    MODULUSPI IT SOLUTIONS PVT LTD. 606, 6TH FLOOR, GOWRA
                    FOUNTAINHEAD, NEAR WESTIN HOTEL, HITECH CITY, MADHAPUR,
                    HYDERABAD-500081, INDIA
                  </h3>
                  <h3>
                    1309 COFFEEN AVENUE STE 1200 SHERIDAN, WYOMING 82801 USA
                    UNITED STATES
                  </h3>
                  <p>
                    Email : sales@moduluspi.com <br />
                    Phone : (Toll free) (888)585-7083 <br />
                    USA : (828)348-4354
                    <br /> INDIA : +91 9353044044
                  </p>
                </Grid>
              </Grid>
            </Container>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Contact;
