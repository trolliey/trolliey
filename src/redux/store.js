import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { login_user_Reducer, register_user_Reducer } from "./reducers/authReducers";
import { add_to_cart_Reducer, remove_from_cart_Reducer } from "./reducers/cartReducer";

const initialState = {
  user_login: {
    userInfo: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
  },
};
const reducer = combineReducers({
  //this is where all the reducers go

  // for authentication 
  user_register: register_user_Reducer,
  user_login: login_user_Reducer,
  add_to_cart: add_to_cart_Reducer,
  remove_from_cart: remove_from_cart_Reducer,
});

const composeForBrowser =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeForBrowser(applyMiddleware(thunk))
);

export default store;
