import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/likedQuotes/";

export function getQuotes() {
  //fetch defaults to get
  console.log(baseUrl);
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function deleteQuote(quote) {
  return fetch(baseUrl + quote.id, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}

export function favoritingQuote(quote) {
  console.log("entered favorite quote function...");
  return fetch(baseUrl, {
    method: "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(quote),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteQuoteClientSide(quoteId, quoteArray) {
  return quoteArray.filter((quote, index) => {
    if (index !== quoteId) {
      return true;
    } else {
      return false;
    }
  });
}
