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
      return action.likedQuotes;

    case types.DELETE_COURSE_OPTIMISTIC:
      //filter is important here because it return a new array of elements that meet the criteria
      //So state is not being changed
      return state.filter((quote) => {
        console.log(quote.id);
        quote.id !== action.quote.id;
      });

    default:
      return state;
  }
}
