import * as types from "../actions/actionTypes";
import initialState from "./initialState";

//state is being initialized as an empty array, because this will end up storing an array of courses
export default function donaldTrumpApiReducer(
  state = initialState.donaldTrump,
  action
) {
  switch (action.type) {
    case types.LOAD_DONALD_TRUMP_QUOTES_SUCCESS:
      state = [...state, action.donaldTrump];

      return state;

    //always declare a default, it results in reducer returning untouched state for actions it doesn't care about
    default:
      return state;
  }
}
