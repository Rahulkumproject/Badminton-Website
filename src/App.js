
import { useState } from 'react';
import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import Alert from './Components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";


function App() {
  const[mode,setdarkmode]=useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      message:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }  
 const toggle=()=>{
   if(mode=='light'){
    setdarkmode('dark');
    document.body.style.backgroundColor='#0f0e0e';
    showAlert("Dark mode has been enabled",'success');
   }else{
     setdarkmode('light');
     document.body.style.backgroundColor='white';
     showAlert("Light mode has been enabled",'success');
   }
  }
 const toggle1=()=>{
   if(mode=='light'){
    setdarkmode('dark');
    document.body.style.backgroundColor='green';
    showAlert("Green mode has been enabled",'success');
   }else{
     setdarkmode('light');
     document.body.style.backgroundColor='white';
     showAlert("Light mode has been enabled",'success');
   }
  

  }
  return (
    <>
    {/* <Router> */}
    <Navbar title="Word-counter" toggle1={toggle1} mode={mode}  toggle={toggle}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    {/* <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">

          </Route>
        </Switch>
      </Router> */}
           <Textform showAlert={showAlert}  heading="Enter the Text" mode={mode}/>
      </div>

     </>
  );
}

export default App;
