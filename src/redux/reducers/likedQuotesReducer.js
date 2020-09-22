import * as types from "../actions/actionTypes";
import initialState from "./initialState";

//state is being initialized as an empty array, because this will end up storing an array of courses
export default function likeQuotesApiReducer(
  state = initialState.likedQuotes,
  action
) {
  console.log("Entered likedQuotes reducer...");
  switch (action.type) {
    case types.LOAD_LIKED_QUOTES_SUCCESS:
      return [...state, action.likedQuotes];

    default:
      return state;
  }
}
