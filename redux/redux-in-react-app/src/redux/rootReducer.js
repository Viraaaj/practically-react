import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import candyReducers from "./candies/candyReducers";
import iceCreamReducer from "./iceCream/iceCreamReducer";
import asyncReducer from "./user/userReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  candies: candyReducers,
  user: asyncReducer
})

export default rootReducer;