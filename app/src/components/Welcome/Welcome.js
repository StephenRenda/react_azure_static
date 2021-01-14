import { Button, Grid } from '@material-ui/core';
import styles from './Welcome.module.css';
const Welcome = () => {

  return (
    <Grid
      className={styles.welcome}
      container
      spacing={3}
    >

    <Grid
      item
      xs={12}
      md={4}
      style={{ margin: "2rem" }}>

      <div>Stephen Renda Jr </div>
      <div>Full Stack Developer</div>
      <Button
        variant="outlined"
        onClick={() => alert("Hey")}
      >
        Check Out my work!
      </Button>
      {/* <AboutMe /> */}
    </Grid>
  </Grid>
  );
};

export default Welcome;
