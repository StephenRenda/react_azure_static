import { Button, Typography, Link, Grid } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import styles from './Welcome.module.css';
import { isMobile } from "react-device-detect";
import {Stars} from "../Stars"
import { Canvas } from "react-three-fiber";
const Welcome = (props) => {
  return (
    <div style={{height: "100vh", width: "100%", background: "black", color:"rgba(217, 217, 217, 0.99)"}}>
      <Grid className={styles.landingView} container>
        <Grid className={isMobile ? styles.containerMobile: styles.container} item>

          <div className={styles.name}>
            Stephen Renda Jr.
          </div>
          <div className={styles.title}>
          Full Stack Developer 
          </div>
          <Button className={styles.button} variant="outlined" onClick={() => props.scroll(props.section)}>
            Check out my work!
          </Button>

          <Typography   className={isMobile ? styles.paragraphMobile: styles.paragraph}>
            Hello, I am a software engineer looking for a entry or junior position. I graduated Fall 2020 with 
            a B.S in Computer Science from Sacramento State University. I am most comfortable creating web applications
            with React and have many full stack React apps below. Recently I have been learning Asp.net core and
            the library SignalR, which uses websockets to stream data. I plan to use SignalR to create a chat application with
            user profiles and rooms similiar to Discord. LetsChat app coming soon :D
          </Typography>
          <Link onClick={() => { window.open("https://www.linkedin.com/in/stephen-renda-aaa612183/")}}>
            <LinkedInIcon fontSize="large" style={{color: "rgba(217, 217, 217, 0.99)"}} />
          </Link>
          <Link onClick={() => { window.open("https://github.com/StephenRenda")}}>
            <GitHubIcon fontSize="large" style={{color: "rgba(217, 217, 217, 0.99)", paddingLeft: "1rem"}}/>
          </Link>

        </Grid>
      </Grid>
      <Canvas>
        <Stars/>
      </Canvas>
    </div>
      
      
  );
};

export default Welcome;
