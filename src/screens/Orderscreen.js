import React, { useEffect } from "react"


import { useDispatch, useSelector } from "react-redux"
import { getUserOrders } from "../actions/orderAction"


const Orderscreen = () => {
  const getuserstate = useSelector(state=>state.getUserOrdersReducer)
  const {error, loading, success, orders} = getuserstate
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getUserOrders())
    },[])
  return (
    <div style={{marginLeft:"15px",padding:"10px"}}>
      
        <h2>My Orders</h2>
        {orders && orders.map(order=>{
          return <div key={order._id} >
            <div className="order">
            <div style={{marginLeft:"15px",padding:"10px"}}>
<p>{order.name}</p>
<p>{order.email}</p>
</div>
<div style={{marginLeft:"20px"}}>
  <p>Items</p>
{order.orderItems.map(item=>{
  return <div> <p>{item.name}[{item.varient}]*{item.quantity} ={item.price}</p>
  </div>
  
})}
</div>
</div>
          </div>
        })}
    </div>
  )
}

export default Orderscreen