import { BUY_CAKE } from "./actions";

const initialState = {
  numOfCakes: 10,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      if (state.numOfCakes < 1) {
        console.log("update the stock");
      }
      return {
        ...state,
        numOfCakes: state.numOfCakes - action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
