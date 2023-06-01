
import { useState } from 'react';
import './App.css'
// import Analyzer from './Analyzer'
import Alert from './components/Alert';
// import About from './components/About';
// import NavBar from './components/NavBar';
import TextForms from './components/TextForms';


function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  return (
    <>
      <TextForms showAlert={showAlert} heading="Text Analyzer" />
      <Alert alert={alert} />
      {/* <Analyzer /> */}
      {/* <About /> */}
    </>
  );
}


export default App; 