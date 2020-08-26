import { handleResponse, handleError } from "./apiUtils";
const donaldTrumpQuoteURL = process.env.API_DONALD_TRUMP_URL;

export function getRandomDonaldTrumpQuote() {
  //promise based api that is built into modern browsers
  return fetch(donaldTrumpQuoteURL + "/random/quote")
    .then(handleResponse)
    .catch(handleError);
}

export function getDonaldTrumpTags() {
  //promise based api that is built into modern browsers
  return fetch(donaldTrumpQuoteURL + "/tag")
    .then(handleResponse)
    .catch(handleError);
}
