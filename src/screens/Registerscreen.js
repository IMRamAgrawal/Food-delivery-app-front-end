
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
    const[name, setName] = useState("")
    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")
    const[cpassword, setCpassword] = useState("")
    const registerstate = useSelector(state=>state.registerUserReducer)
    const {error, loading, success} = registerstate
    const dispatch = useDispatch()

    
    const register =()=>{
      
    if(password!== cpassword){
        showAlert("Password And Confirm Password Not Matched","Warning")
    }
    else if((email.indexOf("@") === -1) || (email.indexOf(".") === -1)){
        showAlert("Not a valid Email","Warning")
    }
    else{
        const user={
            name,
            email,
            password
        }
        // console.log(user)
        dispatch(registerUser(user))
           
    }
 
}
useEffect(() => {
    if (success) {
    showAlert("Successfully Registered", "Congratulations")
     setName("")
     setEmail("")
     setPassword("")
     setCpassword("")
    // window.location.href="/login"
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
        <input required type="text" placeholder="name" value={name} onChange={(e)=>{setName(e.target.value)}} className='form-control'/>
        <input required type="email" placeholder="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} className='form-control'/>
        <input  required type="password" placeholder="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} className='form-control'/>
        <input required type="password" placeholder="confirm password" value={cpassword} onChange={(e)=>{setCpassword(e.target.value)}} className='form-control'/>
        <button disabled={name.length<2 || email.length<3 ||password.length<2} onClick={register}>Register</button>
    </div>
    <div>
        <Link to="/login" style={{textDecoration:"none", color:"black"}}>Click here to login</Link>
    </div>
    </div>
  )
}
 export default Registerscreen

 