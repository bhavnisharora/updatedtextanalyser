
import { useState } from 'react';
import './App.css'
import Alert from './components/Alert';
// import About from './components/About';
// import NavBar from './components/NavBar';
import TextForms from './components/TextForms';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



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

      <Router>
        {/* <NavBar /> */}
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            <Route exact path="/">
              {/* call your component for linking...... */}
            </Route>
            <Route exact path="/">

            </Route>
          </Switch>
        </div>
      </Router>
      <TextForms showAlert={showAlert} heading="Text Analyzer" />
      {/* <About /> */}
    </>
  );
}


export default App; 