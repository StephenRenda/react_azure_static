import { Button, Grid } from '@material-ui/core';
import styles from './Welcome.module.css';
import { isMobile } from "react-device-detect";
import {Stars} from "../Stars"
import { Canvas } from "react-three-fiber";
const Welcome = (props) => {
  return (
    <div style={{height: "100vh", width: "100%", background: "black"}}>
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
        </Grid>
      </Grid>
      <Canvas>
        <Stars/>
      </Canvas>
    </div>
      
      
  );
};

export default Welcome;
