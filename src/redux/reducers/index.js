import { combineReducers } from "redux";
import courses from "./courseReducer";
import authors from "./authorReducer";
import quotes from "./quotesApiReducer";
import likedQuotes from "./likedQuotesReducer";
import jokes from "./jokesApiReducer";
import likedJokes from "./likedJokesReducer";
import apiCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
  courses: courses,
  authors,
  quotes,
  likedQuotes,
  likedJokes,
  jokes,
  apiCallsInProgress,
});

export default rootReducer;
