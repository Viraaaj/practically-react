const redux = require('redux')
const reduxLogger= require('redux-logger')

const createStore = redux.createStore
const combineReducers = redux.combineReducers

const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger()

const BUY_CAKE = 'BUY_CAKE'
const BUY_CREAM = 'BUY_CREAM'

function buyCake() {
  return{
    type: BUY_CAKE
  }
}

function buyCream() {
  return{
    type: BUY_CREAM
  }
}

const initialCakeState = {
  numOfCakes: 10
}

const initialIceCreamState = {
  numOfIceCreams: 30
}

const cakeReducer = (state = initialCakeState, action) => {
  switch(action.type){
    case BUY_CAKE: return{
      ...state,
      numOfCakes: state.numOfCakes - 1
    }
    default: return state
  }
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch(action.type){
    case BUY_CREAM: return{
      numOfIceCreams: state.numOfIceCreams - 2
    }
    default: return state
  }
}

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer
})

const store = createStore(rootReducer, applyMiddleware(logger))
console.log('Initial', store.getState());

const unsubscribe = store.subscribe(() => console.log('Updated', store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCream())
unsubscribe() 