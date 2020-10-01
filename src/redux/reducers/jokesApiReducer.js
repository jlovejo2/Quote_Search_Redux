import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function jokesApiReducer(state = initialState.jokes, action) {
  console.log("Entered jokes reducer...");
  switch (action.type) {
    case types.LOAD_DAD_JOKES_SUCCESS:
      state = [...state, action.jokes];
      return state;

    default:
      return state;
  }
}
