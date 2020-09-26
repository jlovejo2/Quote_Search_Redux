export const LOAD_RAND_QUOTE_GARDEN_SUCCESS = "LOAD_RAND_QUOTE_GARDEN_SUCCESS";
export const LOAD_RON_SWANSON_QUOTES_SUCCESS =
  "LOAD_RON_SWANSON_QUOTES_SUCCESS";
export const LOAD_KANYE_WEST_QUOTES_SUCCESS = "LOAD_KANYE_WEST_QUOTES_SUCCESS";
export const LOAD_TAYLOR_SWIFT_QUOTES_SUCCESS =
  "LOAD_TAYLOR_SWIFT_QUOTES_SUCCESS";
export const LOAD_DONALD_TRUMP_QUOTES_SUCCESS =
  "LOAD_DONALD_TRUMP_QUOTES_SUCCESS";
export const LOAD_COURSES_SUCCESS = "LOAD_COURSES_SUCCESS";
export const LOAD_AUTHORS_SUCCESS = "LOAD_AUTHORS_SUCCESS";
export const CREATE_COURSE_SUCCESS = "CREATE_COURSE_SUCCESS";
export const UPDATE_COURSE_SUCCESS = "UPDATE_COURSE_SUCCESS";
export const LOAD_LIKED_QUOTES_SUCCESS = "LOAD_LIKED_QUOTES_SUCCESS";
export const DELETE_QUOTE_OPTIMISTIC = "DELETE_QUOTE_OPTIMISTIC";
export const DELETE_QUOTE_CIENT_SIDE_OPTIMISTIC =
  "DELETE_QUOTE_CLIENT_SIDE_OPTIMISTIC";
export const FAVORITE_QUOTE_SUCCESS = "FAVORITE_QUOTE_SUCCESS";
export const BEGIN_API_CALL = "BEGIN_API_CALL";
export const API_CALL_ERROR = "API_CALL_ERROR";

// By convention, actions that end in "_SUCCESS" are assumed to have been the result of a completed
// API call. But since we're doing an optimistic delete, we're hiding loading state.
// So this action name deliberately omits the "_SUCCESS" suffix.
// If it had one, our apiCallsInProgress counter would be decremented below zero
// because we're not incrementing the number of apiCallInProgress when the delete request begins.
export const DELETE_COURSE_OPTIMISTIC = "DELETE_COURSE_OPTIMISTIC";
