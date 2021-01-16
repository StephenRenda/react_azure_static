import React from "react";
import Welcome from './components/Welcome/Welcome';
import Works from './components/Works/Works';

const App = ()=> {
  return (
    <div style={style}>
      <Welcome/>
      <Works/>
    </div>
  );
}

export default App;

const style ={
  minWidth: "350px"
}
