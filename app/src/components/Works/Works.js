import React from 'react';
import { Grid, Card, CardContent, Typography, CardActions, Link} from "@material-ui/core";
import styles from './Works.module.css';
import video from '../../media/5addb6cfe35b4d44953c898c8c9cbf99.mp4';
const Works = ()=> {
    
  return (
    <Grid className={styles.worksView} container spacing={4} justify="center" >
        {/* Original Art */}
        <Grid className={styles.container} item component={Card} xs={12} md={4} >
        <CardContent style={{ textAlign: "left" }}>
                <Typography variant="h5" component="h2">
                    Loan Managment App
                </Typography>
                <Typography color="textSecondary">
                    React, Node, ASP.NET, SQL, Docker
                </Typography>
                <Typography className={styles.info} variant="body2" component="p">
                    Streamlined loan managment application made for The Money Brokers located in Sacramento, CA.
                </Typography>
        </CardContent>
        <CardActions>
            <Link href={video}>
            <Typography>Learn More</Typography>
            </Link>
        </CardActions>
        </Grid>
        {/* Original Art */}
        <Grid className={styles.container} item component={Card} xs={12} md={4} >
        <CardContent style={{ textAlign: "left" }}>
                <Typography variant="h5" component="h2">
                    Original Art
                </Typography>
                <Typography color="textSecondary">
                    React, Redux, MongoDB, Express
                </Typography>
                <Typography className={styles.info} variant="body2" component="p">
                Fully functioning ecommerce website using Paypal. Manages users and inventory aswell, and also provides admin privilges. (Add new product, check orders, etc.)
                </Typography>
        </CardContent>
        <CardActions>
            <Link href="https://original-art.herokuapp.com/">
            <Typography>Learn More</Typography>
            </Link>
        </CardActions>
        </Grid>
        {/* Covid Tracker */}
        
        <Grid className={styles.container} item component={Card} xs={12} md={4} >
        <CardContent style={{ textAlign: "left" }}>
            <Grid container>
            <Grid item>
                <Typography variant="h5" component="h2">
                Covid-19 Tracker
                </Typography>
                <Typography color="textSecondary">React, material-ui, api</Typography>
                <Typography
                variant="body2"
                component="p"
                style={{ height: "6vh" }}
                >
                Covid pandemic tracker, using an api provided by the Centers for Disease Control and Prevention. <br />
                </Typography>
            </Grid>
            <Grid item></Grid>
            </Grid>
        </CardContent>
        <CardActions>
            <Link href="https://covid-tracker1.herokuapp.com/">
            <Typography>Learn More</Typography>
            </Link>
        </CardActions>
        </Grid>
        {/* Exercise Tracker */}
        <Grid item component={Card} xs={12} md={4} style={{ margin: "2rem" }}>
            <CardContent style={{ textAlign: "left" }}>
            <Grid container>
                <Grid item>
                <Typography variant="h5" component="h2">
                    Exercise Tracker
                </Typography>
                <Typography color="textSecondary">React, Node, Express, Mongo</Typography>
                <Typography
                    variant="body2"
                    component="p"
                    style={{ height: "5vh" }}
                >
                    Uses MERN stack to track exercises as well as users. <br />
                </Typography>
                </Grid>
                <Grid item></Grid>
            </Grid>
            </CardContent>
            <CardActions>
            <Link href="https://frozen-mesa-34640.herokuapp.com/">
                <Typography>Learn More</Typography>
            </Link>
            </CardActions>
        </Grid>
        {/* Tic Tac Toe */}
        <Grid item component={Card} xs={12} md={4} style={{ margin: "2rem" }}>
            <CardContent style={{ textAlign: "left" }}>
            <Grid container>
                <Grid item>
                <Typography variant="h5" component="h2">
                    Tic Tac Toe
                </Typography>
                <Typography color="textSecondary">React, AI</Typography>
                <Typography
                    variant="body2"
                    component="p"
                    style={{ height: "5vh" }}
                >
                    Uses latest hooks, best practises, and an unbeatable AI on max difficulty. <br />
                </Typography>
                </Grid>
                <Grid item></Grid>
            </Grid>
            </CardContent>
            <CardActions>
            <Link href="https://stephenrenda.github.io/Tic_Tac_Toe_ES6/">
                <Typography>Learn More</Typography>
            </Link>
            </CardActions>
        </Grid>
        {/* Quiz App */}
        <Grid item component={Card} xs={12} md={4} style={{ margin: "2rem" }}>
            <CardContent style={{ textAlign: "left" }}>
            <Grid container>
                <Grid item>
                <Typography variant="h5" component="h2">
                    Quiz App
                </Typography>
                <Typography color="textSecondary">REACT-JS</Typography>
                <Typography
                    variant="body2"
                    component="p"
                    style={{ height: "5vh" }}
                >
                    Uses hooks and best practices. <br />
                </Typography>
                </Grid>
                <Grid item></Grid>
            </Grid>
            </CardContent>
            <CardActions>
            <Link href="https://stephenrenda.github.io/Quiz_App/">
                <Typography>Learn More</Typography>
            </Link>
            </CardActions>
        </Grid>
    
    </Grid>
  );
}

export default Works;

