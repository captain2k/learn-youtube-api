import { combineReducers } from "redux";
import videoReducer from "./listVideoReducer";
import listVideoInfoReducer from "./listVideoInfo";

const rootReducer = combineReducers({
    videoReducer,
    listVideoInfoReducer
})

export default rootReducer