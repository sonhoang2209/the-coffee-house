import { combineReducers } from "redux";
import giftReducer from "./giftReducer";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
  giftReducer,
  cartReducer
});

export default rootReducer;