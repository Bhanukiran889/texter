import React, {useState} from 'react'
import './App.css';
import About from './components/About';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import Navbar from './components/NavBar';
// import { BrowserRouter as Router, Route} from 'react-router-dom'


function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type ) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout ( () => {

      setAlert(null);

    }, 1800);
  }

  const [mode, setMode] = useState("light");
  const [Btn, setText] = useState('Enable dark mode');

  const toggleMode = ()=>{
    if (mode === 'light'){
      setMode('dark')
      setText('Disable dark mode')
      document.body.style.backgroundColor = "#1f2933";
      showAlert("Dark mode has been enabled", "success")
    }
    else{
      setMode('light')
      setText('Enable dark mode')
      document.body.style.backgroundColor = "#cbd2d9";
      showAlert("Light mode has been enabled", "dark")

    }
  }

  return (
    <>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} Btn={Btn}/>
    <Alert alert={alert} variant="success" onClose={() => setAlert(false)} dismissible className="fade-out"/>
    <div className="container" >
      <TextForm heading="Enter the text to analyze" mode={mode} toggleMode={toggleMode} alert={alert} showAlert={showAlert}/>
    </div>
    <About/>

    

</>
  );
}

export default App;
