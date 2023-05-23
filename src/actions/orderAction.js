import axios from "axios";
import { loginUserReducer } from "../reducers/userReducer";
import { cartReducer } from "../reducers/cartReducer";
// import { useNavigate } from "react-router-dom";

export const placeOrder = ()=>async(dispatch, getState)=>{
    
    dispatch({type: "PLACE_ORDER_REQUEST"})
    
    const currentUser = getState().loginUserReducer.currentUser
    const cartItems = getState().cartReducer.cartItems
   
      
    // if(!currentUser){
    //     alert("Please login for confirm your order")
    //     localStorage.removeItem("cartItems", JSON.stringify(cartItems))
    //     navigate("/login")
     
    // }
try{

    
    const response = await axios.post("https://fooddeleiveryapp-backend.onrender.com/api/orders/placeorder",{currentUser, cartItems})
    dispatch({type: "PLACE_ORDER_SUCCESS"})
   
    console.log(response)
    localStorage.removeItem("cartItems", JSON.stringify(cartItems))

    //location.reload();

  
}catch(error){
    dispatch({type:"PLACE_ORDER_FAILED", payload: error})
    console.log(error);
}
}


export const getUserOrders = ()=>async(dispatch, getState)=>{
    
    dispatch({type: "GET_USER_ORDERS_REQUEST"})
    
    const currentUser = getState().loginUserReducer.currentUser
   
try{
      console.log("hii")
    const response = await axios.post("https://fooddeleiveryapp-backend.onrender.com/api/orders/getuserorders",{email : currentUser.email})
    console.log(response)
    dispatch({type: "GET_USER_ORDERS_SUCCESS", payload : response.data})
    
   
}catch(error){
    dispatch({type:"GET_USER_ORDERS_FAILED", payload: error})
    console.log(error);
}
}

