import * as types from "../actions/actionTypes";
import initialState from "./initialState";
// import { insertItem } from "../../api/apiUtils";

//state is being initialized as an empty array, because this will end up storing an array of courses
export default function likeJokesApiReducer(
  state = initialState.likedJokes,
  action
) {
  console.log("Entered likedQuotes reducer...");
  switch (action.type) {
    case types.LOAD_LIKED_JOKES_SUCCESS:
      if (state.length === 0) {
        console.log("state length: ", state.length);
        return action.likedJokes;
      } else {
        return state;
      }

    // case types.FAVORITE_QUOTE_SUCCESS:
    //   return [...state, { ...action.quote }];

    default:
      return state;
  }
}
