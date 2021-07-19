import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyIceCream } from '../redux/iceCream/iceCreamActions'

function HooksIceCreamContainer() {

  const numOfIceCreams = useSelector(state => state.iceCream.numOfIceCreams)
  const dispatch = useDispatch()

  return (
    <div>
      <h2> number of Ice Creams(using hooks): {numOfIceCreams} </h2>
      <button onClick={() => dispatch(buyIceCream())} > Buy ice creams </button>
    </div>
  )
}

export default HooksIceCreamContainer
