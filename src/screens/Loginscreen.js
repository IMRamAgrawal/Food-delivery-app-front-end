// import React from 'react'
// import { useState, useEffect } from 'react'
// import { useNavigate} from "react-router-dom";
// import { useDispatch, useSelector } from 'react-redux'
// import { loginUser } from '../actions/userAction'
// import Loading from '../Components/Loading'
// import { Link } from 'react-router-dom';

// const Loginscreen = (props) => {
//   let navigate = useNavigate();
//   const {alert, showAlert, setAlert} = props
//     const[email, SetEmail] = useState("")
//     const[password, SetPassword] = useState("")
//     const loginstate = useSelector(state=>state.loginUserReducer)
//     const {error, loading, success,errors} = loginstate

//     const dispatch = useDispatch()

//      const login =()=>{
//       const user={email,password}
//       dispatch(loginUser(user))
//     }
    
  
    
    
//     useEffect(() => {
//       if (success) {
//         navigate('/')
//       } else if (errors) {
//         showAlert("Invalid Credentials", "Warning")
//         // Show error message to user
//       }
//     }, [success, errors, navigate])
  
   
        

    

//   return (
//     <div className="Register shadow-lg p-3 mb-5 bg-body rounded">
//        {loading && (<Loading/>)}
//         {/* {success && (<Success success="User Registered Successfully"/>)} */}
//         {/* {error && (<Error error="Invalid Credentials"/>)} */}
//     <div>
//         <h2>Login</h2>
//     </div>
// <div className="Registerinput" style={{width: "70%"}}>
   
//     <input required type="email" placeholder="email" value={email} onChange={(e)=>{SetEmail(e.target.value)}} className='form-control'/>
//     <input  required type="password" placeholder="password" value={password} onChange={(e)=>{SetPassword(e.target.value)}} className='form-control'/>
   
//     <button onClick={login}>Login</button>
// </div>
// <div>
//         <Link to="/register"  style={{textDecoration:"none", color:"black"}}>Click here to Register</Link>
//     </div>
// </div>
//   )
// }

// export default Loginscreen

import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../actions/userAction';
import Loading from '../Components/Loading';
import { Link } from 'react-router-dom';

const Loginscreen = (props) => {
  let navigate = useNavigate();
  const { alert, showAlert, setAlert } = props;
  const [email, SetEmail] = useState('');
  const [password, SetPassword] = useState('');
  const loginstate = useSelector((state) => state.loginUserReducer);
  const { error, loading, success, errors } = loginstate;

  const dispatch = useDispatch();

  const login = () => {
    const user = { email, password };
    dispatch(loginUser(user));
  };

  useEffect(() => {
    if (success) {
      navigate('/');
    } else if (errors) {
      showAlert('Invalid Credentials', 'Warning');
      // Show error message to user
    }
  }, [success, errors, navigate]);

  return (
    <div className="Register shadow-lg p-3 mb-5 bg-body rounded">
      {loading && <Loading />}
      {/* {success && (<Success success="User Registered Successfully"/>)} */}
      {/* {error && (<Error error="Invalid Credentials"/>)} */}
      <div>
        <h2>Login</h2>
      </div>
      <div className="Registerinput" style={{ width: '70%' }}>
        <input
          required
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => {
            SetEmail(e.target.value);
          }}
          className="form-control"
        />
        <input
          required
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => {
            SetPassword(e.target.value);
          }}
          className="form-control"
        />

        <button onClick={login}>Login</button>
      </div>
      <div>
        <Link to="/register" style={{ textDecoration: 'none', color: 'black' }}>
          Click here to Register
        </Link>
      </div>
    </div>
  );
};

export default Loginscreen;
