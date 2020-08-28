import * as types from "../actions/actionTypes";
import initialState from "./initialState";

//state is being initialized as an empty array, because this will end up storing an array of courses
export default function ronSwansonApiReducer(
  state = initialState.quotes,
  action
) {
  console.log("In Ron swanson reducer");
  switch (action.type) {
    case types.LOAD_RON_SWANSON_QUOTES_SUCCESS:
      state = [...state, action.quotes];

      return state;

    case types.LOAD_TAYLOR_SWIFT_QUOTES_SUCCESS:
      state = [...state, action.quotes];

      return state;

    case types.LOAD_RAND_QUOTE_GARDEN_SUCCESS:
      state = [...state, action.quotes];

      return state;

    case types.LOAD_KANYE_WEST_QUOTES_SUCCESS:
      state = [...state, action.quotes];

      return state;

    case types.LOAD_DONALD_TRUMP_QUOTES_SUCCESS:
      state = [...state, action.quotes];

      return state;

    //always declare a default, it results in reducer returning untouched state for actions it doesn't care about
    default:
      return state;
  }
}
