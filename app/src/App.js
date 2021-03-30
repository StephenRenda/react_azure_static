import React, { useState, useEffect, useRef, useLayoutEffect} from "react";
// import { Button } from "@material-ui/core";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import {Typography} from "@material-ui/core";
import Welcome from './components/Welcome/Welcome';
import Works from './components/Works/Works';
import Contact from './components/Contact/Contact';

import styles from "./App.module.css";

const App = ()=> {
  // const welcomeSection = useRef(null), 
  const worksSection = useRef(null), contactSection = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [toggle,setToggle] = useState(false)
  // const [workSectionPosition, setWorkSectionPosition] = useState(0);
  // const [contactSectionPosition, setContactSectionPosition] = useState(0);
  const [dynamicButtonStyle, setDynamicButtonStyle] = useState(styles.lightContactButton);
  useLayoutEffect(() => {
    const updatePosition =()=> {
      setScrollPosition(window.pageYOffset);
    }
    window.addEventListener("scroll", updatePosition);
    updatePosition();
    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  const scrollToRef = (ref) =>
  window.scrollTo({
    top: ref.current.offsetTop,
    left: 0,
    behavior: "smooth",
  });

  useEffect(() => {
    // Update the document title using the browser API
    // console.log(`Scroll position: ${scrollPosition}`);
    // console.log(`Offset of works section: ${workSectionPosition}`);
    // setWorkSectionPosition(worksSection.current.offsetTop)
    if (scrollPosition >= 0 ) { setDynamicButtonStyle(styles.lightContactButton)} 
    if (scrollPosition >= worksSection.current.offsetTop ) { setDynamicButtonStyle(styles.contactButton)} 
    if (scrollPosition >= contactSection.current.offsetTop) { setDynamicButtonStyle(styles.noContactButton)} 
  },[scrollPosition]);

  return (
    <div>
      <Welcome scroll={scrollToRef} section={worksSection} />
      {toggle ? 
      <Typography className={dynamicButtonStyle}
       onClick={() => setToggle(!toggle)}>stephenrendajr@gmail.com</Typography>
      :
      <MailOutlineIcon fontSize="large" 
      className={dynamicButtonStyle}
      // className={workSectionPosition <= scrollPosition ? styles.contactButton : styles.noContactButton} scrollToRef(contactSection)
      onClick={() => scrollToRef(contactSection)}/>
      }

      <div ref={worksSection}>
        <Works />
      </div>
      <div ref={contactSection}>
      <Contact/>
      </div>
    </div>
  );
}

export default App;

