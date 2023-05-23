import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { cartReducer } from '../reducers/cartReducer'
import { Link } from 'react-router-dom'
import { logoutUser } from '../actions/userAction'
import { useNavigate } from 'react-router-dom'

import { useState } from 'react'


const Navbar = ({alert, setAlert, showAlert}) => {
  const cartstate = useSelector(state=>state.cartReducer)
  const userstate = useSelector(state=>state.loginUserReducer)
  const {currentUser} = userstate
  let navigate = useNavigate()
  const dispatch = useDispatch()
  const[click,setClick] = useState(false)
  const handleClick =()=>{
    setClick(!click)
  }
  return (
    
    
        <nav className="navbar navbar-expand-lg shadow-lg p-1 bg-body rounded">
  
  <div className="navba">
    <div>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          
    <Link className="navbar-brand" to="/">AGRA-PIZZA</Link>
   
    <li className="nav-item">
          <Link className="nav-link" to="/cart">Cart {cartstate.cartItems.length}</Link>
        </li>
        </ul>
        </div>
        <div className={click ? "nav-menu-active" : "navbaright"}>
           
   {currentUser ?
             <div className="nav-item dropdown">
             <a style={{backgroundColor: "white !important", color:"black", textDecoration:"none"}} class=" dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
             {currentUser.name}
             </a>
             <ul className="dropdown-menu" style={{position:"relative",zIndex:"100"}}>
             <Link className="dropdown-item" aria-current="page" to="/login" onClick={()=>{dispatch(logoutUser())}}> Logout</Link>
             <Link className="dropdown-item" aria-current="page" to="/orders" >My-Orders</Link>
           
             </ul>
           </div>
             : 
             <Link className="nav-link active" aria-current="page" to="/login">Login</Link>}

      </div>
    </div>
  

</nav>
   
  )
}

export default Navbar