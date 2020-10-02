import * as types from "../actions/actionTypes";
import initialState from "./initialState";
// import { insertItem } from "../../api/apiUtils";

//state is being initialized as an empty array, because this will end up storing an array of courses
export default function likeQuotesApiReducer(
  state = initialState.likedQuotes,
  action
) {
  console.log("Entered likedQuotes reducer...");
  switch (action.type) {
    case types.LOAD_LIKED_QUOTES_SUCCESS:
      if (state.length === 0) {
        console.log("state length: ", state.length);
        return action.likedQuotes;
      } else {
        return state;
      }

    case types.DELETE_LIKED_QUOTE_OPTIMISTIC:
      return state.filter((quoteData) => {
        return quoteData.id !== action.quote.id;
      });

    case types.FAVORITE_QUOTE_SUCCESS:
      return [...state, { ...action.quote }];

    default:
      return state;
  }
}
