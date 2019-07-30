import {combineReducers} from "redux";
import noteReducer from "./noteReducer";

const reducers = combineReducers({
  noteReducer: noteReducer
});
export default reducers;