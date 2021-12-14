import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { create_new_add_Reducer, edit_single_ad_Reducer, get_all_ads_Reducer } from "./reducers/adReducer";
import { login_user_Reducer, register_user_Reducer } from "./reducers/authReducers";
import { add_to_cart_Reducer, remove_from_cart_Reducer } from "./reducers/cartReducer";
import { add_category_Reducer, get_all_categories_Reducer } from "./reducers/categoryReducers";
import { get_featured_products_Reducer } from "./reducers/featuredProductsReducers";
import { create_a_product_Reducer, get_all_products_Reducer, get_single_product_Reducer, remove_product_Reducer } from "./reducers/productReducer";
import { create_a_review_Reducer, get_all_store_reviews_Reducer, like_a_review_Reducer } from "./reducers/reviewReducers";
import { set_search_query_Reducer } from "./reducers/searchReducers";
import { get_all_special_products_Reducer } from "./reducers/specialProductsReducers";
import { create_single_store_Reducer, get_all_stores_Reducer, get_store_products_Reducer } from "./reducers/storeReducer";
import { add_subcategory_Reducer, get_subcategories_Reducer } from "./reducers/subcategoryReducer";
import { get_all_users_Reducer } from "./reducers/userReducer";

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

  //fot adding to cart and removing from cart
  add_to_cart: add_to_cart_Reducer,
  remove_from_cart: remove_from_cart_Reducer,

  //for users
  get_all_users: get_all_users_Reducer,

  //for products
  create_a_product: create_a_product_Reducer,
  get_single_product: get_single_product_Reducer,
  get_all_products: get_all_products_Reducer,
  remove_product: remove_product_Reducer,
  
  //for categories
  get_all_categories: get_all_categories_Reducer,
  add_category: add_category_Reducer,

  //for subcategories
  get_subcategories: get_subcategories_Reducer,
  create_subcategory: add_subcategory_Reducer,

  //for store
  get_store_products: get_store_products_Reducer,
  create_store: create_single_store_Reducer,
  get_all_stores: get_all_stores_Reducer,

  //for special products
  get_special_products: get_all_special_products_Reducer,

  // for featured products
  get_featured_products: get_featured_products_Reducer,

  //for adcs
  create_new_add: create_new_add_Reducer,
  get_all_ads: get_all_ads_Reducer,
  edit_single_ad: edit_single_ad_Reducer,

  //for search
  search_query: set_search_query_Reducer,

  // fore reviews
  create_review: create_a_review_Reducer,
  get_all_reviews: get_all_store_reviews_Reducer,
  like_a_review: like_a_review_Reducer
});

const composeForBrowser =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeForBrowser(applyMiddleware(thunk))
);

export default store;
