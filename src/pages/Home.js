import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Fade,
  Grid,
  Container,
  Hidden,
  Button,
  Typography,
} from "@material-ui/core";

import { Link } from "react-router-dom";
import HomeFiber from "./HomeFiber";
import TitleAnimation from "../components/TitleAnimation";

// logo imports

import android from "../assets/logo/android.png";
import angular from "../assets/logo/angular.png";
import aws from "../assets/logo/aws.png";
import azure from "../assets/logo/azure.png";
import dotnet from "../assets/logo/dotnet.png";
import informatica from "../assets/logo/informatica.png";
import java from "../assets/logo/java.png";
import oracle from "../assets/logo/oracle.png";
import react from "../assets/logo/react.png";
import salesforce from "../assets/logo/salesforce.png";
import sap from "../assets/logo/sap.png";
import swift from "../assets/logo/swift.png";
import thermo from "../assets/logo/thermo.png";
import unity from "../assets/logo/unity.png";
import unreal from "../assets/logo/unreal.png";

// import copper from "../assets/logo/copper.png";
import mold from "../assets/logo/mold.png";
import planet from "../assets/logo/planet.png";
import save from "../assets/logo/save.png";
import transpotation from "../assets/logo/transpotation.png";
import well from "../assets/logo/well.png";

const useStyles = makeStyles((theme) => ({
  root: {},
  wrapper: {},
  title_two: {
    fontSize: "40px",
    marginBottom: "50px",
  },
  section_one: {
    height: "50vh",
    display: "flex",
    alignItems: "center",
  },
  section_two: {
    padding: "50px 0px",
    // background: theme.palette.primary.main,
    // color: "white",
  },
  section_three: {
    paddingTop: "50px",
    paddingBottom: "100px",
  },

  visual_title: {
    fontFamily: "Poppins",
    fontWeight: "600",
    fontSize: "19rem",
    textTransform: "uppercase",
    textAlign: "center",
    background: "linear-gradient(90deg, #fc466b 0%, #3f5efb 100%)",
    backgroundSize: "100%",
    backgroundRepeat: "repeat",
    /* Use the text as a mask for the background. */
    /* This will show the gradient as a text color rather than element bg. */
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
    [theme.breakpoints.down("md")]: {
      fontSize: "14em",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "9em",
    },
    "&:hover": {
      textFillColor: "transparent",
      textStrokeColor: "currentColor",
      textStrokeWidth: ".015em",
    },
  },
  visual_subtitle: {
    fontFamily: "Poppins",
    fontWeight: "600",
    fontSize: "3rem",
    textTransform: "uppercase",
    textAlign: "center",
    background: "linear-gradient(90deg, #fc466b 0%, #3f5efb 100%)",
    backgroundSize: "100%",
    backgroundRepeat: "repeat",
    /* Use the text as a mask for the background. */
    /* This will show the gradient as a text color rather than element bg. */
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
    margin: "0",
    padding: "0",
    [theme.breakpoints.down("md")]: {
      fontSize: "2em",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "2em",
    },
    "&:hover": {
      textFillColor: "transparent",
      textStrokeColor: "currentColor",
      textStrokeWidth: ".030em",
    },
  },

  section_xr: {
    background: "#651FFF",
    paddingTop: "50px",
    paddingBottom: "50px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "#FFF",
  },
  textAnimation_xr: {
    fontFamily: "Montserrat",
    fontSize: "300px",
    fontWeight: 400,
    margin: "10px 0",
    backgroundImage:
      " url(https://media.giphy.com/media/26BROrSHlmyzzHf3i/giphy.gif)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    backgroundSize: "cover",
    letterSpacing: "1px",
    lineHeight: ".75",
    textTransform: "uppercase",
    [theme.breakpoints.down("xs")]: {
      fontSize: "200px",
    },
    color: "transparent",
  },
  button_xr: {
    marginTop: theme.spacing(4),
    color: "grey",
    borderRadius: "0px",
    clipPath: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)",
    paddingRight: "50px",
    paddingLeft: "50px",
    "&:hover": {
      textFillColor: "black",
    },
  },
  paper: {
    boxShadow: "none",
  },
  //   unreal_logo: {
  //     height: "100px",
  //     [theme.breakpoints.down("xs")]: {
  //       height: "50px",
  //     },
  //   },
  //   unity_logo: {
  //     height: "50px",
  //     [theme.breakpoints.down("xs")]: {
  //       height: "25px",
  //     },
  //   },
}));

const Home = () => {
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
      <Fade direction="up" in={mount} timeout={5000} mountOnEnter unmountOnExit>
        <div className={classes.wrapper}>
          <TitleAnimation />
          {/* <HomeFiber /> */}
          {/* <div className={classes.section_one}>
            <Hidden xsDown>
              <Grid container>
                <Grid lg={7} md={7} sm={8} xs={7} align="right">
                  <span className={classes.visual_title}>We</span>
                </Grid>
                <Grid
                  lg={5}
                  md={5}
                  sm={4}
                  xs={5}
                  container
                  spacing={0}
                  direction="column"
                  justify="center"
                  alignItems="flex-start"
                >
                  <span className={classes.visual_subtitle}>Design</span>
                  <br />

                  <span className={classes.visual_subtitle}>Create</span>
                  <br />

                  <span className={classes.visual_subtitle}>Deliver</span>
                </Grid>
              </Grid>
            </Hidden>
            <Hidden smUp>
              <Grid container>
                <Grid xs={12} align="center">
                  <span className={classes.visual_title}>We</span>
                </Grid>
                <Grid
                  xs={12}
                  container
                  spacing={0}
                  direction="column"
                  justify="center"
                >
                  <span className={classes.visual_subtitle}>Design</span>
                  <br />

                  <span className={classes.visual_subtitle}>Create</span>
                  <br />

                  <span className={classes.visual_subtitle}>Deliver</span>
                </Grid>
              </Grid>
            </Hidden> */}

          <div className={classes.section_two}>
            <Container align="center">
              <h1>Our Expertise</h1>
            </Container>
            <div className="slider">
              <div className="slide-track">
                <div
                  className="slide"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img src={android} height="45" width="auto" alt="" />
                </div>
                <div
                  className="slide"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img src={azure} height="80" width="auto" alt="" />
                </div>
                <div
                  className="slide"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img src={angular} height="50" width="auto" alt="" />
                </div>
                <div
                  className="slide"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img src={aws} height="50" width="auto" alt="" />
                </div>

                <div
                  className="slide"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img src={informatica} height="40" width="auto" alt="" />
                </div>
                <div
                  className="slide"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img src={java} height="80" width="auto" alt="" />
                </div>
                <div
                  className="slide"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img src={unreal} height="60" width="auto" alt="" />
                </div>
                <div
                  className="slide"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img src={dotnet} height="50" width="auto" alt="" />
                </div>
                <div
                  className="slide"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img src={oracle} height="15" width="auto" alt="" />
                </div>
                <div
                  className="slide"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img src={react} height="50" width="auto" alt="" />
                </div>

                <div
                  classNames="slide"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "0px 50px",
                  }}
                >
                  <img src={unity} height="35" alt="" />
                </div>

                <div
                  className="slide"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img src={salesforce} height="45" width="auto" alt="" />
                </div>
                <div
                  className="slide"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img src={swift} height="40" width="auto" alt="" />
                </div>
                <div
                  className="slide"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img src={sap} height="50" width="auto" alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className={classes.section_three}>
            <Container align="center">
              <h1>Our Clients</h1>
            </Container>
            <div className="slider">
              <div className="slide-track">
                <div
                  className="slide"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img src={well} height="45" width="auto" alt="" />
                </div>
                <div
                  className="slide"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img src={thermo} height="80" width="auto" alt="" />
                </div>
                <div
                  className="slide"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img src={save} height="50" width="auto" alt="" />
                </div>
                <div
                  className="slide"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img src={transpotation} height="50" width="auto" alt="" />
                </div>

                <div
                  className="slide"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img src={mold} height="40" width="auto" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className={classes.section_xr}>
            <Typography className={classes.textAnimation_xr}>XR</Typography>
            <Button
              className={classes.button_xr}
              color="inherit"
              component={Link}
              to="xr"
            >
              dive in
            </Button>
          </div>
        </div>
      </Fade>
    </div>
  );
};
export default Home;
