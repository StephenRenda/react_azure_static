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
      className={styles.greeting}
      item
      xs={12}
    >
      <div className={styles.name}>
        Stephen Renda Jr
      </div>
      <div className={styles.title}>
       Full Stack Developer
      </div>

      <Button
        className={styles.button}
        variant="outlined"
        onClick={() => alert("Hey")}
      >
        Check Out my work!
      </Button>
    </Grid>
  </Grid>
  );
};

export default Welcome;
