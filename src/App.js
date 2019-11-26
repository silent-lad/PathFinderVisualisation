import React from "react";
import "./App.css";
import Grid from "./Components/Grid";
import Topbar from "./Components/Topbar/index.js";
import "bootstrap/dist/css/bootstrap.min.css";

import "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Topbar></Topbar>
      <Grid height={25} width={60} />
    </div>
  );
}

export default App;
