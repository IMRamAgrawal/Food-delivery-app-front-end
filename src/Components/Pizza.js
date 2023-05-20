import React, { useState } from 'react'
import pizzas from './pizzadata'
import {Modal} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import {useDispatch, useSelector} from "react-redux"
import { addToCart } from '../actions/cartActions'
import { cartReducer } from '../reducers/cartReducer'

const Pizza = ({pizza}) => {
const cartstate = useSelector(state=>state.cartReducer)
const {alreadyExists} = cartstate
    const [quantity, setQuantity] = useState(1)
    const [varient, setVarient] = useState("small")
    const [show, setShow] = useState(false)
    const handleclose = ()=>{
      setShow(false)
    }
    const handleshow = ()=>{
      setShow(true)
    }

  const dispatch = useDispatch()
  function addtocart(){
    dispatch(addToCart(pizza, quantity, varient))

    }
  return (
    <div className='card' key={pizza._id}>
      <div onClick={handleshow}>
        <h1 >{pizza.name}</h1>
        <img src={pizza.image}/>

        </div>
        <div className='flex'>
           <div>
            <p>varients</p>
            <select style={{width:"90px"}} value={varient} onChange={(e)=>{setVarient(e.target.value)}}>
                {pizza.varients.map(varients=>{
                    return <option value={varients} key={varients.price}>{varients}</option>
                })}
            </select>

            </div>
            <div>
            <p>Quantity</p>
            <select style={{width:"90px"}} value={quantity} onChange={(e)=>{setQuantity(e.target.value)}}>
                {[...Array(10).keys()].map((ind,i)=>{
                    return <option value={i+1}key={i}>{i+1}</option>
                })}
            </select>
            </div>
        </div>
        <div className='flex-container'>
            <div style={{alignItems: "center",marginTop:"10px"}}>
                <p>Price: {pizza.prices[0][varient]*quantity}Rs/-</p>
            </div>

                {/* <button onClick={addToCart()}>ADD TO CART</button> */}
                <button className='addbutton' onClick={addtocart}>ADD TO CART</button>

       
        </div>
   


</div>
  )
}

export default Pizza