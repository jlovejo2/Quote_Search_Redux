import { handleResponse, handleError } from "./apiUtils";
const randomQuoteUrl = process.env.API_QUOTE_GARDEN_URL + "/quotes/random";
const authorQuoteUrl = process.env.API_QUOTE_GARDEN_URL + "/authors/";

export function getRandomQuoteGarden() {
  //promise based api that is built into modern browsers
  return fetch(randomQuoteUrl).then(handleResponse).catch(handleError);
}

export function getQuoteByAuthorQuoteGarden(authorName) {
  return fetch(authorQuoteUrl + `:${authorName}?page=1&limit=10"`)
    .then(handleResponse)
    .catch(handleError);
}
