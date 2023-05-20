import React from 'react'

const Loading = () => {
  return (
    <div className="spinner-border" role="status" style={{height:"80px", width:"80px",marginTop:"100px"}}>
    <span className="visually-hidden">Loading...</span>
  </div>
  )
}

export default Loading