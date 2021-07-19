import React from 'react'
import { connect } from 'react-redux'
import { buyCandies } from '../redux/candies/candyActions'

function CandyContainer(props) {

  return (
    <div>
      <h2> Number of Candies: {props.numOfCandies} </h2>
      <button onClick={props.buyCandies} > Buy candies </button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    numOfCandies: state.candies.numOfCandies
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buyCandies: () => dispatch(buyCandies())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
) (CandyContainer)
