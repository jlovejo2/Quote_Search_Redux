import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/likedQuotes/";

export function getQuotes() {
  //fetch defaults to get
  console.log(baseUrl);
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

// export function saveQuote(quote) {
//   console.log("base url", baseUrl);
//   console.log("course", quote);
//   console.log("course id", quote.id);

//   return fetch(baseUrl + (quote.id || ""), {
//     method: quote.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
//     headers: { "content-type": "application/json" },
//     body: JSON.stringify(quote),
//   })
//     .then(handleResponse)
//     .catch(handleError);
// }

export function deleteQuote(quoteId) {
  return fetch(baseUrl + quoteId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
