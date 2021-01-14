import React, { useState } from "react";
// import TextField from "@material-ui/core/TextField";
// import Button from "@material-ui/core/Button";
// import Axios from "axios";

// import styles from "../App.module.css";

const ContactView = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    message: "",
    emailSent: null,
  });
  const [disabled, setDisabled] = useState(true);

  const updateField = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
    if (state.name != "" && state.email != "" && state.message != "")
      setDisabled(false);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault(); // Prevents refresh
  //   setDisabled(true);
  //   const { name, email, message } = state;
  //   console.log(" and LOOK HERE", state);

  //   !state.emailSent &&
  //     Axios.post("/api/email", { name, email, message })
  //       .then((res) => {
  //         console.log("then", res);

  //         if (res.data.success) {
  //           setDisabled(false);
  //           setState({
  //             emailSent: true,
  //           });
  //         } else {
  //           setDisabled(false);
  //           setState({
  //             emailSent: false,
  //           });
  //         }
  //       })
  //       .catch((err) => {
  //         console.log(err.response);
  //         setDisabled(false);
  //         setState({
  //           emailSent: false,
  //         });
  //       });
  // };

  return (
    <div
      style={{ marginTop: "1rem" }}
    >
      <form onSubmit={()=>console.log("yes")} noValidate autoComplete="off">
        <div >
          <div
            id="standard-textarea"
            label="Name"
            placeholder=""
            multiline
            required
            // value={state.name}
            name="name"
            onChange={updateField}
          />
        </div>
        <div>
          <div
            id="standard-textarea"
            label="Email"
            placeholder=""
            multiline
            required
            name="email"
            onChange={updateField}
          />
        </div>
        <div>
          <div
            id="standard-multiline-static"
            label="Message"
            multiline
            required
            rows={4}
            name="message"
            onChange={updateField}
          />
        </div>

        <button
          variant="outlined"
          type="submit"
          disabled={disabled}
          style={{ marginTop: "2rem" }}
        >
          Send
        </button>

        {state.emailSent === true && <p >&#x2713;</p>}
        {state.emailSent === false && <p >x</p>}
      </form>
    </div>
  );
};

export default ContactView;
