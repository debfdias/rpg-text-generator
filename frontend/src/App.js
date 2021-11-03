import React, { useState, useEffect } from "react";
import geralt from './assets/geralt.png';

import "./styles.css";

import api from "./services/api";

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    //retrieve data from API
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={geralt} className="App-logo" alt="logo" />
        <h1>
        Projeto Criatividade Computacional
        </h1>
      </header>
    </div>
  );
}

export default App;
