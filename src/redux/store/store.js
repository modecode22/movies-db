import {createStore , applyMiddleware} from "redux"
import { moviesReducer } from "../reducers/moviesReducer";
import thunk from "redux-thunk";
// 1-createStore
export const store = createStore(moviesReducer, applyMiddleware(thunk));