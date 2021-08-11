import React, { useState } from 'react';
import { Grid, Card, CardContent, Typography, CardActions, Link} from "@material-ui/core";
import styles from './Works.module.css';
import video from '../../media/5addb6cfe35b4d44953c898c8c9cbf99.mp4';
const Works = ()=> {

    const [toggle,setToggle] = useState(false);
    return (
        <Grid className={styles.worksView} container  justify="center" >
            {/* Massage E Card */}
            <Grid className={styles.container} item component={Card} xs={12} md={4} >
                <CardContent style={{ textAlign: "left" }}>
                <Grid container>
                    <Grid item>
                    <Typography variant="h5" component="h2">
                        Massage Therapist Contact Page
                    </Typography>
                    <Typography color="textSecondary">ASP.NET, Razor</Typography>
                    <Typography
                        variant="body2"
                        component="p"
                        style={{ height: "5vh" }}
                    >
                        Lists contact information, services, 
                        and reviews for a local massage therapist.  <br />
                    </Typography>
                    </Grid>
                    <Grid item></Grid>
                </Grid>
                </CardContent>
                <CardActions>
                <Link onClick={()=> window.open("https://massage20210616165131.azurewebsites.net/")}>
                    <Typography>Learn More</Typography>
                </Link>
                </CardActions>
            </Grid>
            {/* Let's Chat  */}
            <Grid className={styles.container} item component={Card} xs={12} md={4} >
            <CardContent style={{ textAlign: "left" }}>
                <Grid container>
                <Grid item>
                    <Typography variant="h5" component="h2">
                    Let's Chat
                    </Typography>
                    <Typography color="textSecondary">ASP.NET, React </Typography>
                    <Typography
                    variant="body2"
                    component="p"
                    style={{ height: "6vh" }}
                    >
                    Chat application that makes use of websocket technology for realtime messaging. <br />
                    </Typography>
                </Grid>
                <Grid item></Grid>
                </Grid>
            </CardContent>
            <CardActions>
                <Link onClick={()=> window.open("https://gray-mushroom-0ff2d0110.azurestaticapps.net/")}>
                <Typography>Learn More</Typography>
                </Link>
            </CardActions>
            </Grid>
            {/* Loan Managment App */}

            <Grid className={styles.firstContainer} item component={Card} xs={12} md={4} >
            <CardContent style={{ textAlign: "left"}}>
                    <Typography variant="h5" component="h2">
                        Loan Managment App
                    </Typography>
                    <Typography color="textSecondary">
                        React, Node, ASP.NET, SQL, Docker
                    </Typography>
                    { toggle ?
                        <video controls width="100%">
                            <source src={video}
                                    type="video/mp4"/>
                            Sorry, your browser doesn't support embedded videos.
                        </video>
                        :
                        <Typography className={styles.info} variant="body2" component="p">
                        Streamlined loan managment application made for The Money Brokers located in Sacramento, CA.
                        </Typography>
                    }
            </CardContent>
            <CardActions>
                <Link onClick={()=>setToggle(!toggle)}>
                <Typography>        
                    { toggle ?
                    "Close" :
                    "Learn More "
                    }
                </Typography>
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
                    Fully functioning ecommerce website using Paypal. Manages users, inventory, and provides admin privilges like adding new products, check orders, etc.
                    </Typography>
            </CardContent>
            <CardActions>
                <Link onClick={()=> window.open("https://original-art.herokuapp.com/")}>
                <Typography>Learn More</Typography>
                </Link>
            </CardActions>
            </Grid>
            {/* Exercise Tracker */}
            <Grid className={styles.container} item component={Card} xs={12} md={4} >
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
                <Link onClick={()=> window.open("https://frozen-mesa-34640.herokuapp.com/")}>
                    <Typography>Learn More</Typography>
                </Link>
                </CardActions>
            </Grid>
            {/* Tic Tac Toe */}
            <Grid className={styles.container} item component={Card} xs={12} md={4} >
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
                <Link onClick={()=> window.open("https://stephenrenda.github.io/Tic_Tac_Toe_ES6/")}>
                    <Typography>Learn More</Typography>
                </Link>
                </CardActions>
            </Grid>
            {/* Quiz App
            <Grid className={styles.container} item component={Card} xs={12} md={4} >
                <CardContent style={{ textAlign: "left" }}>
                <Grid container>
                    <Grid item>
                    <Typography variant="h5" component="h2">
                        Quiz App
                    </Typography>
                    <Typography color="textSecondary">React</Typography>
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
                <Link onClick={()=> window.open("https://stephenrenda.github.io/Quiz_App/")}>
                    <Typography>Learn More</Typography>
                </Link>
                </CardActions>
            </Grid> */}
        
        </Grid>
    );
}

export default Works;

