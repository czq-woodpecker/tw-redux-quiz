import {GET_NOTES} from "../actions/noteAction";

const initialValue = {
  notes: []
}
export default function noteReducer(state = initialValue, action) {
  if(action.type === GET_NOTES) {
    return {
      ...state,
      notes: action.payload
    }
  } else {
    return state;
  }
}