import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '../actions/cartActions'
import { deleteFromCart } from '../actions/cartActions'
import Checkout from './Checkout'
import { placeOrder } from '../actions/orderAction'
import {orderstate} from "../reducers/orderreducer"
import {loginstate} from "../reducers/userReducer"
import { useEffect } from 'react'
// import { DeleteIcon } from 'react-delete-icon'
const Cart = ({showAlert}) => {

const cartstate = useSelector(state=>state.cartReducer)
const cartItems = cartstate.cartItems
const orderstate = useSelector(state=>state.placeOrderReducer)
const {loading, success,errors} = orderstate
const loginstate = useSelector(state=>state.loginUserReducer)
const {currentUser} = loginstate

useEffect(() => {
  if (success && currentUser) {
    
    showAlert("Your Orders was placed", "Congratulations")
    // window.location.href="/"
  } else if (errors) {
    showAlert("Some Internal issue", "Warning")
    // Show error message to user
  }
}, [success, errors, loading, currentUser])
var subtotal = cartItems.reduce((x, item)=>x +item.price,0)
const dispatch = useDispatch()
  return (
  
    <div style={{display:"flex",flexDirection:"column", width:"100%"}} >
        <div style={{margin:"0 15px 15px 15px"}}>
            <h1><b>My Cart</b></h1>
        </div>
  {cartItems.length === 0 ? <div>Cart is empty</div> :
  cartItems.map(item=>{
    return <div className="selectitem">
        <div>
       <h5>{item.name}[{item.varient}]</h5>
    
        <p><b>Quantity</b>: 
        <button onClick={()=>{dispatch(addToCart(item, item.quantity+1, item.varient))}}>+</button>
        <b>{item.quantity}</b>
        <button onClick={()=>{dispatch(addToCart(item, item.quantity-1, item.varient))}}>-</button></p>
        <p><b>Price</b>: {item.quantity} * {item.prices[0][item.varient]} = {item.price}</p>
       
        </div>
        <div style={{display:"inline-flex",marginRight:"10px",alignItems:"center"}}>
        <div>
     <img src={item.image} style={{height:"80px"}}/>
        </div>
        <div>
            <button onClick={()=>{dispatch(deleteFromCart(item))}}>Delete</button>
        </div>
        </div>

        </div>
  })}
     <div>
      <p style={{fontSize:"20px",margin:"15px"}}>Total Price : Rs {subtotal}/-</p>
      {/* <Checkout subtotal={subtotal} /> */}
      <button style={{margin:"15px"}} onClick={()=>{dispatch(placeOrder())}}>Confirm Your Orders</button>
    </div>
    </div>
 
    
  )
}

export default Cart
