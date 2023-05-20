export const addToCart = (pizza, quantity, varient)=>(dispatch, getState)=>{
    // "proxy": "https://food-deleivery-app-backend-iqsf.onrender.com"
    // "proxy": "http://localhost:5000"

    var cartItem= {
        name: pizza.name,
        _id: pizza._id,
        image : pizza.image,
        varient: varient,
        quantity: Number(quantity),
        prices : pizza.prices,
        price: pizza.prices[0][varient]*quantity
    }
   if(cartItem.quantity>10){
    alert("you cannot add more than 10 quantities")
   }
   else{
    if(cartItem.quantity<1){
        dispatch({type:"DELETE_FROM_CART", payload: pizza})
   }
   else{
    dispatch({type:"ADD_TO_CART" , payload: cartItem})
   }
 
   }
    const cartItems = getState().cartReducer.cartItems
    localStorage.setItem("cartItems", JSON.stringify(cartItems))

}
export const deleteFromCart=(pizza)=>(dispatch, getState)=>{
    dispatch({type:"DELETE_FROM_CART", payload: pizza})
    const cartItems = getState().cartReducer.cartItems
    localStorage.setItem("cartItems", JSON.stringify(cartItems))
}