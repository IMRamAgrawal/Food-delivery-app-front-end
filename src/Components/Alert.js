import React from 'react'


const Alert = (props) => {
    const {alert, showAlert, setAlert} = props
    
    const capitalize = (word)=>{
       
        const lower= word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    <div className="alert" style={{height: "40px"}}>
       {alert && <div className="alertc">
       

    <strong>{ capitalize(alert.type)}</strong>: {alert.msg}  
    </div>}
    </div>
  )
}

export default Alert