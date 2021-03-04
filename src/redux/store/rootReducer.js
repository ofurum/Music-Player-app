import { combineReducers } from "redux";
import recentlyReducer from '../recently released/recently-released'

export const rootReducer = combineReducers({
  recentlyReleased: recentlyReducer
});