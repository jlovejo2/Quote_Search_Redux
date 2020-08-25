import * as types from "../actions/actionTypes";
import initialState from "./initialState";

//state is being initialized as an empty array, because this will end up storing an array of courses
export default function quoteGardenApiReducer(
  state = initialState.quoteGarden,
  action
) {
  console.log("In Quote Garden reducer");
  switch (action.type) {
    case types.LOAD_RAND_QUOTE_GARDEN_SUCCESS:
      state = [...state, action.quoteGarden];

      return state;

    //always declare a default, it results in reducer returning untouched state for actions it doesn't care about
    default:
      return state;
  }
}
