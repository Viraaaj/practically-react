import React from 'react'
import { connect } from 'react-redux'
import { buyIceCream } from '../redux/iceCream/iceCreamActions'

function IceCreamContainer(props) {
  return (
    <div>
      <h2> Number of ice creams: {props.numOfIceCreams} </h2>
      <button onClick={props.buyIceCream}> Buy ice creams </button>
    </div>
  )
}

const mapStateToProps = state => {
  return{
    numOfIceCreams: state.iceCream.numOfIceCreams
  }
}

const mapDispatchToProps = dispatch => {
  return{
    buyIceCream: () => dispatch(buyIceCream())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
) (IceCreamContainer)
