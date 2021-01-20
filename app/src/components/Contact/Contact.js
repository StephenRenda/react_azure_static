import React, { useState } from "react";
import { Grid, TextField, Button} from "@material-ui/core";
import { isMobile } from "react-device-detect";

// import Axios from "axios";

import styles from "./Contact.module.css";

const Contact = (props) => {
  const [state, setState] = useState({
    // name: "",
    // email: "",
    // message: "",
    emailSent: null,
  });
  const [disabled, setDisabled] = useState(true);

  const updateField = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
    if (state.name !== "" && state.email !== "" && state.message !== "")
      setDisabled(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents refresh
    setDisabled(true);
    // const { name, email, message } = state;
    console.log(" and LOOK HERE", state);

    // !state.emailSent &&
    //   Axios.post("/api/email", { name, email, message })
    //     .then((res) => {
    //       console.log("then", res);

    //       if (res.data.success) {
    //         setDisabled(false);
    //         setState({
    //           emailSent: true,
    //         });
    //       } else {
    //         setDisabled(false);
    //         setState({
    //           emailSent: false,
    //         });
    //       }
    //     })
    //     .catch((err) => {
    //       console.log(err.response);
    //       setDisabled(false);
    //       setState({
    //         emailSent: false,
    //       });
    //     });
  };

  return (
    <Grid className={styles.contactView} container spacing={4} justify="center" >

      <form className={styles.formContainer} onSubmit={handleSubmit} noValidate autoComplete="off">
        <div>
          <TextField
            id="standard-textarea"
            label="Name"
            placeholder=""
            multiline
            required
            className={isMobile ? styles.entryMobile : styles.entry}
            // value={state.name}
            name="name"
            onChange={updateField}
          />
        </div>
        <div>
          <TextField
            id="standard-textarea"
            label="Email"
            placeholder=""
            multiline
            required
            className={isMobile ? styles.entryMobile : styles.entry}
            name="email"
            onChange={updateField}
          />
        </div>
        <div>
          <TextField
            id="standard-multiline-static"
            label="Message"
            multiline
            required
            rows={4}
            className={isMobile ? styles.entryMobile : styles.entry}
            name="message"
            onChange={updateField}
          />
        </div>

        <Button
          variant="outlined"
          type="submit"
          disabled={disabled}
          style={{ marginTop: "2rem" }}
        >
          Send
        </Button>
        {state.emailSent === true && <p className={styles.success}>&#x2713;</p>}
        {state.emailSent === false && <p className={styles.err}>x</p>}
      </form>
    </Grid>
  );
};

export default Contact;
