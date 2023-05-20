
import React from 'react'
import { renderMatches, useNavigate} from "react-router-dom";
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../actions/userAction'
import {Link} from "react-router-dom"
import Loading from '../Components/Loading'
import Success from '../Components/Success'
import Error from '../Components/Error'
const Registerscreen = (props) => {
    const {alert, showAlert, setAlert} = props
    
    let navigate = useNavigate();
    const[name, SetName] = useState("")
    const[email, SetEmail] = useState("")
    const[password, SetPassword] = useState("")
    const[cpassword, SetCpassword] = useState("")
    const registerstate = useSelector(state=>state.registerUserReducer)
    const {error, loading, success} = registerstate
    const dispatch = useDispatch()

    
    const register =()=>{
      
    if(password!== cpassword){
        showAlert("Password And Confirm Password Not Matched","Sorry")
    }
    else{
        const user={
            name,
            email,
            password
        }
        // console.log(user)
        dispatch(registerUser(user))
        // navigate("/login")
        // (showAlert("Invalid credentials", "warning"))
    }
}
useEffect(() => {
    if (success) {
        showAlert("Successfully Registered", "Congratulations")
        navigate("/login")
    } else if (error) {
        //showAlert(error, "danger")
        showAlert("Email id Already Exist","danger")
    }
}, [success, error])

  return (

    <div className="Register shadow-lg p-3 mb-5 bg-body rounded">
        {/* {loading && (<Loading/>)} */}
        {/* {success && showAlert("Invalid credentials", "warning")} */}
       
        <div>
            <h2>Register</h2>
        </div>
    <div className="Registerinput" style={{width: "90%"}}>
        <input required type="text" placeholder="name" value={name} onChange={(e)=>{SetName(e.target.value)}} className='form-control'/>
        <input required type="email" placeholder="email" value={email} onChange={(e)=>{SetEmail(e.target.value)}} className='form-control'/>
        <input  required type="password" placeholder="password" value={password} onChange={(e)=>{SetPassword(e.target.value)}} className='form-control'/>
        <input required type="password" placeholder="confirm password" value={cpassword} onChange={(e)=>{SetCpassword(e.target.value)}} className='form-control'/>
        <button onClick={register}>Register</button>
    </div>
    <div>
        <Link to="/login" style={{textDecoration:"none", color:"black"}}>Click here to login</Link>
    </div>
    </div>
  )
}
 export default Registerscreen

 