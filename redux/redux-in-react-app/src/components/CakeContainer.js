import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux/cake/cakeActions'

function CakeContainer(props) {
  return (
    <div>
      
      <h2> Number of Cakes: {props.numOfCakes} </h2>
      <button onClick={props.buyCake} > Add more cakes </button>

    </div>
  )
}

const mapStateToProps = state => {
  return {
    numOfCakes: state.cake.numOfCakes
  }
}

const mapDispatchToProps = dispatch => {
  return{
    buyCake: () => dispatch(buyCake())
  }
}

export default connect( 
  mapStateToProps, 
  mapDispatchToProps )(CakeContainer)
  