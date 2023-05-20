
import './App.css';
import Cart from './Components/Cart';
import Navbar from './Components/Navbar';
import Homescreen from './screens/Homescreen';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Registerscreen from './screens/Registerscreen';
import Loginscreen from './screens/Loginscreen';
import Alert from './Components/Alert';
import Orderscreen from './screens/Orderscreen';
import { useState } from 'react';

function App() {
  const[alert, setAlert] = useState(null);
    const showAlert = (message, type) => {
        setAlert({
          msg: message,
          type: type
        })
        setTimeout(()=>{
          setAlert(null);
        },9000)
      }
  return (
  <>
<BrowserRouter>
  <Navbar/>
  <Alert alert={alert} setAlert={setAlert} showAlert={showAlert}/>
  <Routes>
  <Route path="/" element={<Homescreen showAlert={showAlert}/>}/>
  <Route path="/cart" element={<Cart alert={alert} setAlert={setAlert} showAlert={showAlert}/>}/>
  <Route path="/register" element={<Registerscreen alert={alert} setAlert={setAlert} showAlert={showAlert}/>}/>
  <Route path="/login" element={<Loginscreen alert={alert} setAlert={setAlert} showAlert={showAlert}/>}/>
  <Route path="/orders" element={<Orderscreen/>}/>
  </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
