import { combineReducers } from "redux";
import courses from "./courseReducer";
import authors from "./authorReducer";
import quotes from "./quotesApiReducer";
import likedQuotes from "./likedQuotesReducer";
import jokes from "./jokesApiReducer";
// import quoteGarden from "./quoteGardenApiReducer";
// import kanyeWest from "./kanyeWestApiReducer";
// import taylorSwift from "./taylorSwiftApiReducer";
// import donaldTrump from "./donaldTrumpApiReducer";
import apiCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
  courses: courses,
  authors,
  quotes,
  likedQuotes,
  jokes,
  // quoteGarden,
  // kanyeWest,
  // taylorSwift,
  // donaldTrump,
  apiCallsInProgress,
});

export default rootReducer;
