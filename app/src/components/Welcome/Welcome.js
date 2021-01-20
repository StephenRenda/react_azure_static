import { Button, Grid } from '@material-ui/core';
import styles from './Welcome.module.css';
import { isMobile } from "react-device-detect";

const Welcome = (props) => {
  return (
    <Grid className={styles.landingView} container spacing={4}>
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
  );
};

export default Welcome;
