import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { newsReducer } from "./News/news.reducer";
import { userReducer } from "./User/user.reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({newsReducer,userReducer})
export const store = legacy_createStore(rootReducer,applyMiddleware(thunk));