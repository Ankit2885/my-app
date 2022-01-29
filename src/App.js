import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
// import About from './components/About';


// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const [them, setThem] = useState('primary');

  const themSet = (color) => {
    setThem(color);
  }


  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("dark mode has been enabled", "success");
      document.title = "Ankit App Dark Mode";
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been enabled", "success");
      document.title = "Ankit App Light Mode";
    }
  }
  return (
    <>
    {/* <Router> */}
      <Navbar title="Ankit ReactJs" aboutText="about" mode={mode} toggleMode={toggleMode} showAlert={showAlert} themSet={themSet} />
      <Alert alert={alert} />
      <div className="container my-3">
      {/* <Switch> */}
          {/* <Route exact path="/"> */}
        <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} them={them} />
          {/* </Route> */}
          {/* <Route exact path="/about"> */}
            {/* <About/> */}
          {/* </Route> */}
        {/* </Switch> */}
      </div>
    {/* </Router> */}
    </>
  );
}

export default App;
