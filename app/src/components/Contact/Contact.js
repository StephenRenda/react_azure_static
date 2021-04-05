import React, { useState } from "react";
import { Grid, TextField, Button, CardContent, Card} from "@material-ui/core";
import { isMobile } from "react-device-detect";
import styles from "./Contact.module.css";
import emailjs from 'emailjs-com'

const Contact = (props) => {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
    emailSent: null
  })

  const [disabled, setDisabled] = useState(true);

  const updateField = (e) => {
    setData({
      ...data,
      [e.target.id]: e.target.value,
    });
    if (data.name !== "" && data.email !== "" && data.message !== "")
      setDisabled(false);
  };

  const onSubmit=(e)=>{
    e.preventDefault()// Prevents default refresh by the browser

    emailjs.sendForm('service_y67wj28', process.env.REACT_APP_TEMPLATE_ID, e.target, process.env.REACT_APP_USER_ID)
      .then( result => {
        // alert('Message Sent, I\'ll get back to you shortly', result.text);
        setData({
          ...data,
          emailSent: true
        });
      }, error => {
        alert('Thank you, I\'ll get back to you shortly');
        // alert( 'An error occured, Plese try again',error.text)
      })
  }  
  return (
    <Grid className={styles.contactView} container justify="center" >
      <Grid className={styles.formContainer} item component={Card} xs={11} md={6} >

      <CardContent style={{ textAlign: "left" }}>

      <form onSubmit={onSubmit} method="POST" >
        <div>
          <TextField
            id="name"
            label="Name"
            placeholder=""
            multiline
            className={isMobile ? styles.entryMobileSmall : styles.entrySmall}
            name="user_name"
            value={data.name}
            onChange={updateField}
          />
        </div>
        <div>
          <TextField
            id="email"
            label="Email"
            placeholder=""
            multiline
            // required
            className={isMobile ? styles.entryMobileSmall : styles.entrySmall}
            name="user_email"
            value={data.email}
            onChange={updateField}
          />
        </div>
        <div>
          <TextField
            id="message"
            label="Message"
            multiline
            rows={4}
            className={isMobile ? styles.entryMobile : styles.entry}
            name="message"
            value={data.message}
            onChange={updateField}
          />
        </div>

        <Button
          variant="outlined"
          type="submit"
          style={{ marginTop: "2rem" }}
          disabled={disabled}
        >
          Send
        </Button>
        {data.emailSent ?
          <p className={styles.success}>&#x2713;</p>
        : <p> </p>}

      </form>
      </CardContent>
      </Grid>
    </Grid>
  );
}
export default Contact;


// const Contact = (props) => {
//   const [state, setState] = useState({
//     name: "",
//     email: "",
//     message: "",
//     emailSent: null,
//   });
//   const [disabled, setDisabled] = useState(true);

//   const updateField = (e) => {
//     setState({
//       ...state,
//       [e.target.name]: e.target.value,
//     });
//     if (state.name !== "" && state.email !== "" && state.message !== "")
//       setDisabled(false);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault(); // Prevents refresh
//     setDisabled(true);
//     const { name, email, message } = state;
//     console.log(" and LOOK HERE", state);

//     !state.emailSent &&
//       Axios.post("/api/email", { name, email, message })
//       //https://blue-bush-02f54581e.azurestaticapps.net
//         .then((res) => {
//           console.log("then", res);

//           if (res.data.success) {
//             setDisabled(false);
//             setState({
//               emailSent: true,
//             });
//           } else {
//             setDisabled(false);
//             setState({
//               emailSent: false,
//             });
//           }
//         })
//         .catch((err) => {
//           console.log(err.response);
//           setDisabled(false);
//           setState({
//             emailSent: false,
//           });
//         });
//   };

//   return (
//     <Grid className={styles.contactView} container spacing={4} justify="center" >

//       <form className={styles.formContainer} onSubmit={handleSubmit} noValidate autoComplete="off" action="https://script.google.com/macros/s/AKfycbxVtbtuoNvxEOltWqBI2P8lf-9pCsvTv8Hfzd4NjMhBrgT-W-Z5/exec">
//         <div>
//           <TextField
//             id="standard-textarea"
//             label="Name"
//             placeholder=""
//             multiline
//             className={isMobile ? styles.entryMobile : styles.entry}
//             value={state.name}
//             name="name"
//             onChange={updateField}
//           />
//         </div>
//         <div>
//           <TextField
//             id="standard-textarea"
//             label="Email"
//             placeholder=""
//             multiline
//             // required
//             className={isMobile ? styles.entryMobile : styles.entry}
//             name="email"
//             onChange={updateField}
//           />
//         </div>
//         <div>
//           <TextField
//             id="standard-multiline-static"
//             label="Message"
//             multiline
//             rows={4}
//             className={isMobile ? styles.entryMobile : styles.entry}
//             name="message"
//             onChange={updateField}
//           />
//         </div>

//         <Button
//           variant="outlined"
//           type="submit"
//           disabled={disabled}
//           style={{ marginTop: "2rem" }}
//         >
//           Send
//         </Button>
//         {state.emailSent === true && <p className={styles.success}>&#x2713;</p>}
//         {state.emailSent === false && <p className={styles.err}>x</p>}
//       </form>
//     </Grid>
//   );
// };




  // const validEmail = (email) => {
  //   var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  //   return re.test(email);
  // }

  // function validateHuman(honeypot) {
  //   if (honeypot) {  //if hidden form filled up
  //     console.log("Robot Detected!");
  //     return true;
  //   } else {
  //     console.log("Welcome Human!");
  //   }
  // }

  // // get all data in form and return object
  // function getFormData(form) {
  //   var elements = form.elements;

  //   var fields = Object.keys(elements).filter(function(k) {
  //         return (elements[k].name !== "honeypot");
  //   }).map(function(k) {
  //     if(elements[k].name !== undefined) {
  //       return elements[k].name;
  //     // special case for Edge's html collection
  //     }else if(elements[k].length > 0){
  //       return elements[k].item(0).name;
  //     }
  //   }).filter(function(item, pos, self) {
  //     return self.indexOf(item) == pos && item;
  //   });

  //   var formData = {};
  //   fields.forEach(function(name){
  //     var element = elements[name];
      
  //     // singular form elements just have one value
  //     formData[name] = element.value;

  //     // when our element has multiple items, get their values
  //     if (element.length) {
  //       var data = [];
  //       for (var i = 0; i < element.length; i++) {
  //         var item = element.item(i);
  //         if (item.checked || item.selected) {
  //           data.push(item.value);
  //         }
  //       }
  //       formData[name] = data.join(', ');
  //     }
  //   });

  //   // add form-specific values into the data
  //   formData.formDataNameOrder = JSON.stringify(fields);
  //   formData.formGoogleSheetName = form.dataset.sheet || "responses"; // default sheet name
  //   formData.formGoogleSendEmail = form.dataset.email || ""; // no email by default

  //   console.log(formData);
  //   return formData;
  // }

  // function handleFormSubmit(event) {  // handles form submit without any jquery
  //   event.preventDefault();           // we are submitting via xhr below
  //   var form = event.target;
  //   var data = getFormData(form);         // get the values submitted in the form

  //   /* OPTION: Remove this comment to enable SPAM prevention, see README.md
  //   if (validateHuman(data.honeypot)) {  //if form is filled, form will not be submitted
  //     return false;
  //   }
  //   */

  //   if( data.email && !validEmail(data.email) ) {   // if email is not valid show error
  //     setEmailSent(false);
  //     var invalidEmail = form.querySelector(".email-invalid");
  //     if (invalidEmail) {
  //       invalidEmail.style.display = "block";
  //       return false;
  //     }
  //   } else {
  //     disableAllButtons(form);
  //     var url = form.action;
  //     var xhr = new XMLHttpRequest();
  //     xhr.open('POST', url);
  //     // xhr.withCredentials = true;
  //     xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  //     xhr.onreadystatechange = function() {
  //         console.log(xhr.status, xhr.statusText);
  //         console.log(xhr.responseText);
  //         var formElements = form.querySelector(".form-elements")
  //         if (formElements) {
  //           formElements.style.display = "none"; // hide form
  //         }
  //         var thankYouMessage = form.querySelector(".thankyou_message");
  //         if (thankYouMessage) {
  //           thankYouMessage.style.display = "block";
  //         }
  //         return;
  //     };
  //     // url encode form data for sending as post data
  //     var encoded = Object.keys(data).map(function(k) {
  //         return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
  //     }).join('&');
  //     xhr.send(encoded);
  //   }
  // }

  // function loaded() {

  //   console.log("Contact form submission handler loaded successfully.");
  //   // bind to the submit event of our form
  //   var forms = document.querySelectorAll("form.gform");
  //   console.log(forms)
  //   for (var i = 0; i < forms.length; i++) {
  //     forms[i].addEventListener("submit", handleFormSubmit, false);
  //   }
  // };
  // document.addEventListener("DOMContentLoaded", loaded, false);

  // function disableAllButtons(form) {
  //   var buttons = form.querySelectorAll("button");
  //   for (var i = 0; i < buttons.length; i++) {
  //     buttons[i].disabled = true;
  //   }
  // }