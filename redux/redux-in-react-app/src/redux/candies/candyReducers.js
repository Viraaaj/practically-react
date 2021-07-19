import { BUY_CANDIES } from "./candyTypes";

const initialState = {
  numOfCandies: 30
}

const candyReducers = (state = initialState, action) => {
  switch(action.type) {
    case BUY_CANDIES: return {
      ...state,
      numOfCandies: state.numOfCandies - 1
    }

    default: return state
  }
}

export default candyReducers;