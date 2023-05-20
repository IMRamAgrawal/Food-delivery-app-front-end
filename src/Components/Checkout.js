import React from "react"
import StripeCheckout from "react-stripe-checkout"


const Checkout = () => {
  return (
    <div>
        <StripeCheckout>
            <button style={{marginLeft:"15px"}}>Pay Now</button>
        </StripeCheckout>
        </div>
  )
}

export default Checkout