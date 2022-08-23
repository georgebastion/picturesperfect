import { combineReducers } from "redux";

import images from './images'
import authReducer from "./auth";

export default combineReducers({ images, authReducer});