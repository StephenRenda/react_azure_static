import { Button, Grid } from '@material-ui/core';
import styles from './Welcome.module.css';
import { isMobile } from "react-device-detect";

const Welcome = () => {
  return (
    <Grid className={styles.landingView} container spacing={4}>
      <Grid className={isMobile ? styles.containerMobile: styles.container} item>
        <div className={styles.name}>
          Stephen Renda Jr.
        </div>
        <div className={styles.title}>
        Full Stack Developer
        </div>
        <Button className={styles.button} variant="outlined" onClick={() => alert("Hey")}>
          Check out my work!
        </Button>
      </Grid>
    </Grid>
  );
};

export default Welcome;
