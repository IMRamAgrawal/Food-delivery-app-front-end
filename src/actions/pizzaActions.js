import axios from "axios";

export const getAllPizzas=()=>async dispatch=>{
    dispatch({type:"GET_PIZZAS_REQUEST"})


    try{
        const response = await axios.get("https://fooddeleiveryapp-backend.onrender.com/api/pizzas/getallpizzas")
        // console.log(response);
        dispatch({type:"GET_PIZZAS_SUCCESS",payload: response.data})
    } catch(error){
        dispatch({type:"GET_PIZZAS_FAILED", payload: error})
    }
}

