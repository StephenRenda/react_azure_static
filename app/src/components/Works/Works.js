import React from 'react';
import { Grid, Card, CardContent, Typography, CardActions, Link, Button} from "@material-ui/core";
import styles from './Works.module.css';

const Works = ()=> {
    
  return (
    <Grid className={styles.ButtonworksView} container spacing={4} justify="center" >
    <Grid item component={Card} xs={12} md={4} style={{ margin: "2rem" }}>
      <CardContent style={{ textAlign: "left" }}>
        <Grid container>
          <Grid item>
            <Typography variant="h5" component="h2">
              Original Art
            </Typography>
            <Typography color="textSecondary">MERN</Typography>
            <Typography
              variant="body2"
              component="p"
              style={{ height: "6vh" }}
            >
              Uses MERN stack (MongoDB, React, Express, and Node.js). Full
              functioning ecommerce website using Paypal.
              <br />
            </Typography>
          </Grid>
          <Grid item></Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Link href="https://original-art.herokuapp.com/">
          <Typography>Learn More</Typography>
        </Link>
      </CardActions>
    </Grid>
    <Grid item component={Card} xs={12} md={4} style={{ margin: "2rem" }}>
      <CardContent style={{ textAlign: "left" }}>
        <Grid container>
          <Grid item>
            <Typography variant="h5" component="h2">
              Covid-19 Tracker
            </Typography>
            <Typography color="textSecondary">REACT-JS</Typography>
            <Typography
              variant="body2"
              component="p"
              style={{ height: "6vh" }}
            >
              Uses REACT, material-ui, api, and the latest best practices
              (hooks, etc). <br />
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

      <Grid item component={Card} xs={12} md={4} style={{ margin: "2rem" }}>
        <CardContent style={{ textAlign: "left" }}>
          <Grid container>
            <Grid item>
              <Typography variant="h5" component="h2">
                Exercise Tracker
              </Typography>
              <Typography color="textSecondary">MERN</Typography>
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
    
      <Grid item component={Card} xs={12} md={4} style={{ margin: "2rem" }}>
        <CardContent style={{ textAlign: "left" }}>
          <Grid container>
            <Grid item>
              <Typography variant="h5" component="h2">
                Tic Tac Toe
              </Typography>
              <Typography color="textSecondary">REACT-JS</Typography>
              <Typography
                variant="body2"
                component="p"
                style={{ height: "5vh" }}
              >
                Uses latest hooks and simple AI. <br />
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

//     <Grid
//       className={styles.worksView}
//       container
//       spacing={4}
//       justify="center"
//     >
//       <Grid className={styles.container} item component={Card} xs={12} md={4} style={{ margin: "2rem" }} >
//         <CardContent style={{ textAlign: "left" }}>
//           <Grid container>
//             <Grid item>
//               <Typography variant="h5" component="h2">
//                 Original Art
//               </Typography>
//               <Typography variant="h6" color="textSecondary">React, Redux, MongoDB, Express</Typography>
//               <Typography
//                 variant="h6"
//                 component="p"
//                 style={{ height: "8rem" }}
//               >
//                 Uses MERN stack. Full functioning ecommerce website using Paypal.
//                 <br />
//               </Typography>
//             </Grid>
//             <Grid item></Grid>
//           </Grid>
//         </CardContent>
//         <CardActions>
//           <Link href="https://original-art.herokuapp.com/">
//             <Typography variant="h6" >Learn More</Typography>
//           </Link>
//         </CardActions>
//       </Grid>

//       <Grid className={styles.container} item component={Card} md={12} xs={5}>
//         <CardContent style={{ textAlign: "left" }}>
//           <Grid container>
//             <Grid item>
//               <Typography variant="h5" component="h2">
//                 Covid-19 Tracker
//               </Typography>
//               <Typography variant="h6" color="textSecondary">REACT-JS</Typography>
//               <Typography
//                 variant="h6"
//                 component="p"
//                 style={{ height: "8rem" }}
//               >
//                 Uses REACT, material-ui, api, and the latest best practices
//                 (hooks, etc). <br />
//               </Typography>
//             </Grid>
//             <Grid item></Grid>
//           </Grid>
//         </CardContent>
//         <CardActions>
//           <Link href="https://covid-tracker1.herokuapp.com/">
//             <Typography variant="h6">Learn More</Typography>
//           </Link>
//         </CardActions>
//       </Grid>
      
//         <Grid className={styles.container} item component={Card} md={12} xs={5} >
//           <CardContent style={{ textAlign: "left" }}>
//             <Grid container>
//               <Grid item>
//                 <Typography variant="h5" component="h2">
//                   Exercise Tracker
//                 </Typography>
//                 <Typography variant="h6" color="textSecondary">MERN</Typography>
//                 <Typography
//                   variant="h6"
//                   component="p"
//                   style={{ height: "8rem" }}
//                 >
//                   Uses MERN stack to track exercises as well as users. <br />
//                 </Typography>
//               </Grid>
//               <Grid item></Grid>
//             </Grid>
//           </CardContent>
//           <CardActions>
//             <Link href="https://frozen-mesa-34640.herokuapp.com/">
//               <Typography variant="h6">Learn More</Typography>
//             </Link>
//           </CardActions>
//         </Grid>
      
//         <Grid className={styles.container} item component={Card} md={12} xs={5} >
//           <CardContent style={{ textAlign: "left" }}>
//             <Grid container>
//               <Grid item>
//                 <Typography variant="h5" component="h2">
//                   Tic Tac Toe
//                 </Typography>
//                 <Typography variant="h6" color="textSecondary">REACT-JS</Typography>
//                 <Typography
//                   variant="h6"
//                   component="p"
//                   style={{ height: "8rem" }}
//                 >
//                   Uses latest hooks and simple AI. <br />
//                 </Typography>
//               </Grid>
//               <Grid item></Grid>
//             </Grid>
//           </CardContent>
//           <CardActions>
//             <Link href="https://stephenrenda.github.io/Tic_Tac_Toe_ES6/">
//               <Typography variant="h6" >Learn More</Typography>
//             </Link>
//           </CardActions>
//         </Grid>

//     </Grid>
//   );

//     return (
//         <Grid className={styles.worksView} container spacing={4} justify="center">
            
//             <Grid className={styles.container} item component={Card} xs={12} >
//                 <CardContent style={{ textAlign: "left" }}>
//                     <Grid container>
//                     <Grid item>
//                         <Typography variant="h5" component="h2">
//                         Original Art
//                         </Typography>
//                         <Typography color="textSecondary">React, Redux, MongoDB, Express</Typography>
//                         <Typography
//                         variant="body2"
//                         component="p"
//                         style={{ height: "1rem" }}
//                         >
//                         Uses MERN stack. Full functioning ecommerce website using Paypal.
//                         <br />
//                         </Typography>
//                     </Grid>
//                     </Grid>
//                 </CardContent>
//                 <CardActions>
//                     <Link href="https://original-art.herokuapp.com/">
//                     <Typography>Learn More</Typography>
//                     </Link>
//                 </CardActions>
//             </Grid>

//             <Grid className={styles.container} item component={Card} xs={12} >
//             <CardContent style={{ textAlign: "left" }}>
//                 <Grid container>
//                 <Grid item>
//                     <Typography variant="h5" component="h2">
//                     Original Art
//                     </Typography>
//                     <Typography color="textSecondary">React, Redux, MongoDB, Express</Typography>
//                     <Typography
//                     variant="body2"
//                     component="p"
//                     style={{ height: "1rem" }}
//                     >
//                     Uses MERN stack. Full functioning ecommerce website using Paypal.
//                     <br />
//                     </Typography>
//                 </Grid>
//                 </Grid>
//             </CardContent>
//             <CardActions>
//                 <Link href="https://original-art.herokuapp.com/">
//                 <Typography>Learn More</Typography>
//                 </Link>
//             </CardActions>
//             </Grid>
            
//         </Grid>
//     )
// }

export default Works;

