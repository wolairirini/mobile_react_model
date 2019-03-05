import {combineReducers} from "redux";
import globalreducers from "../globalreducers.js";

const reducers = combineReducers({
    ...globalreducers,
})

export default reducers;