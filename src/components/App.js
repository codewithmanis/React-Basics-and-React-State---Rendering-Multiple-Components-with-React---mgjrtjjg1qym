import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () => {
  const data = {
   projectName : "MovieList App"
   projectDescription : "We can search any movie in this application"
  }
  return (
    <div id="main">
    <h1 data-ns-test="project-name">{data.projectName}</h1>
    <p data-ns-test="project-description">{data.projectDescription}</p>
    </div>
  )
}


export default App;
