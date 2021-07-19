import { BUY_ICE_CREAM } from "./iceCreamTypes";

export const buyIceCream = (number = 1) => {
  return {
    type: BUY_ICE_CREAM,
    payload: number
  }
}