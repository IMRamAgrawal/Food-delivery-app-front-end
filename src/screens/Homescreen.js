import React,{useState, useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import { getAllPizzas } from '../actions/pizzaActions'
import pizzas from "../Components/pizzadata"
import Pizza from '../Components/Pizza'
import PizzasReducers from '../reducers/pizzaReducers'
import Loading from '../Components/Loading'
import Error from '../Components/Error'

const Homescreen = ({showAlert}) => {
  const dispatch = useDispatch()
  const pizzasstate = useSelector(state=> state.getAllPizzasReducer)
  const {pizzas, error, loading} = pizzasstate

  useEffect(()=>{
    dispatch(getAllPizzas())
    
  },[])
  return (

    <div>
  <div className="row">
    {loading ? (
      <Loading/>
    ) : error ? (
   <Error error="Something went wrong"/>
    ) : pizzas && Array.isArray(pizzas) ? (
      pizzas.map((pizza) => (
        <div className="pizza"   key={pizza._id}>
          <Pizza pizza={pizza} />
        </div>
      ))
    ) : (
      <h1>No pizzas found</h1>
    )}
  </div>
</div>

  )
}

export default Homescreen


