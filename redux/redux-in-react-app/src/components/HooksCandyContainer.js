import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCandies } from '../redux/candies/candyActions'

function HooksCandyContainer() {

  const numOfCandies = useSelector(state => state.candies.numOfCandies)
  const dispatch = useDispatch()

  return (
    <div>
      <h2> Number of candies(using Hooks): {numOfCandies} </h2>
      <button onClick={() => dispatch(buyCandies())} > Buy candies </button>
    </div>
  )
}

export default HooksCandyContainer
